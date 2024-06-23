import { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import assets from '../../assets/assets.js'


const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + '/api/order/userorders',
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <>
      <div className="my-orders my-[50px] mx-[0px]">
        <h2 className='text-[20px] font-black'>My Orders</h2>
        <div className="contain flex-col gap-[20px] mt-[30px]">
                  {data.map((order, index) => {
              return (
            <div key={index} className="my-orders-order grid xs:grid-cols-[1fr,2fr,1fr] mds:grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] items-center gap-[30px] font-[14px] py-[10px] px-[20px] text-[#454545] border-[1px] border-[solid] border-[#FFEA00]">
              <img className='w-[50px]' src={assets.parcel_icon} alt="" />
              <p className=''>
                {order.items.map((item, index) => {
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity;
                    }
                  else {
                    return item.name+" x "+item.quantity+", "
                    }
                })}
                      </p>
                      <p className=''>${order.amount}.00</p>
                      <p className=''>Items: {order.items.length}</p>
                      <p className=''><span className='text-[#FFEA00]'>&#x25cf;</span> <b className='font-[500] text-[#454545]'>{order.status}</b></p>
                      <button onClick={fetchOrders} className='border-none py-[12px] px-[0px] text-[14px] rounded-[4px] bg-[#FFF5CC] cursor-pointer text-[#454545]'>Track Order</button>
            </div>);
          })}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
