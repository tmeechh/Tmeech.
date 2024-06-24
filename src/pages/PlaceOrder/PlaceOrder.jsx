import { useContext, useEffect } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets/assets';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url, clearCart } =
    useContext(StoreContext);
    const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('COD'); // Default to COD
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const PlaceOrder = async (event) => {
    event.preventDefault();
    setLoading(true);
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
      paymentMethod: paymentMethod,
    };
    if (paymentMethod === 'COD') {
      try {
        const response = await axios.post(url + '/api/order/place', orderData, {
          headers: { token },
        });
        if (response.data.success) {
          clearCart();
          navigate('/myorders');
          toast.success('Order Placed');
        } else {
          toast.error('Error placing order. Please try again.');
        }
      } catch (error) {
        console.error(error);
        toast.error('Error placing order. Please try again.');

        setLoading(false);
      }
    } else if (paymentMethod === 'Stripe') {
      try {
        const response = await axios.post(url + '/api/order/place', orderData, {
          headers: { token },
        });
        if (response.data.success) {
          window.location.replace(response.data.session_url);
        } else {
          toast.error('Error initiating payment. Please try again.');
        }
      } catch (error) {
        console.error(error);
        toast.error('Error initiating payment. Please try again.');
      }
      setLoading(false);
    }
  };

 

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <>
      <form
        onSubmit={PlaceOrder}
        className="place-order flex items-start justify-between gap-[50px] mt-[100px]"
      >
        <div className="place-order-left w-full max-w-[max(30%,500px)]">
          <p className="title text-[30px] font-[600] mb-[50px]">
            Delivery Information
          </p>
          <div className="multi-fields flex gap-[10px]">
            <input
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
            type="text"
            placeholder="Street"
            required
          />
          <div className="multi-fields flex gap-[10px]">
            <input
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              placeholder="City"
              required
            />
            <input
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="multi-fields flex gap-[10px]">
            <input
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              pattern="[0-9]{5}"
              placeholder="Enter ZIP code"
              required
            />
            <input
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#c5c5c5] rounded-[4px] outline-[#FFEA00]"
            type="text"
            placeholder="Phone"
            required
          />
        </div>
        <div className="place-order-right w-full max-w-[max(40%,500px)]">
          <div className="cart-total flex flex-1 flex-col gap-[20px]">
            <h2 className="font-[600] text-[30px] mb-[26px]">Cart Total</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555] ">
                <p className="">Subtotal</p>
                <p className="">${getTotalCartAmount()}</p>
              </div>
              <hr className="my-[10px] mx-0" />
              <div className="cart-total-details flex justify-between text-[#555]">
                <p className="">Delivery Fee</p>
                <p className="">${getTotalCartAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr className="my-[10px] mx-0" />
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                </b>
              </div>
              <div className="mt-[40px]">
                <h1 className="font-[600] text-[30px]  mb-[20px]">
                  Payment Method
                </h1>

                <div>
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={handlePaymentMethodChange}
                    className="cursor-pointer  flex gap-[10px] items-center hidden"
                  />
                  <label
                    htmlFor="cod"
                    className={`cursor-pointer flex gap-[10px] items-center border-[1px] w-[max(10vw,280px)] p-[18px] border-[solid] border-[#FFEA00] mb-[10px] rounded-xl hover:bg-[#FFF5CC] ${
                      paymentMethod === 'COD' ? '' : ''
                    }`}
                  >
                    <img
                      className={`rounded-[50%] filter ${
                        paymentMethod === 'COD' ? '' : 'grayscale '
                      }`}
                      src={assets.selector_icon}
                      alt="COD"
                    />
                    COD (Cash on Delivery)
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="stripe"
                    name="paymentMethod"
                    value="Stripe"
                    checked={paymentMethod === 'Stripe'}
                    onChange={handlePaymentMethodChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="stripe"
                    className={`cursor-pointer flex gap-[10px] items-center border-[1px] w-[max(10vw,280px)] p-[18px] border-[solid] border-[#FFEA00] mb-[10px] rounded-xl hover:bg-[#FFF5CC] ${
                      paymentMethod === 'Stripe' ? '' : ''
                    }`}
                  >
                    <img
                      className={`rounded-[50%] filter ${
                        paymentMethod === 'Stripe' ? '' : 'grayscale '
                      }`}
                      src={assets.selector_icon}
                      alt="Stripe"
                    />
                    Stripe (Credit / Debit)
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="border-none text-white bg-[#FFEA00] w-[max(10vw,130px)] py-[12px] px-0 rounded-[20px] cursor-pointer mt-[10px]"
              disabled={loading}
            >
              {loading ? <div className="spinner"></div> : 'Place Order'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
