import {  useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext) 

  const [currState, setCurrState] = useState('Sign Up');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += '/api/user/login';
    }
    else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
      if (currState === 'Login') {
        toast.success('Welcome back!');
      } else {
        toast.success('Welcome aboard!');
      }
    }
    else {
     toast.error('User does not exist')
    }
  }

  return (
    <>
      <div className="login-popup  fixed z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
        <form onSubmit={onLogin} className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] text-[14px] rounded-[10px]">
          <div className="login-popup-title flex justify-between items-center text-black">
            <h2 className="font-[1000] text-[18px]">{currState}</h2>
            <XCircleIcon
              onClick={() => setShowLogin(false)}
              className="w-[25px] cursor-pointer"
              alt=""
            />
          </div>
          <div className="login-popup-inputs flex flex-col gap-[20px] ">
            {currState === 'Login' ? (
              <></>
            ) : (
                <input
                  name='name' 
                  onChange={onChangeHandler}
                  value={data.name}
                className="outline-none border-[#c9c9c9] border-[1px] p-[10px] rounded-[30px]"
                type="text"
                placeholder="Your name "
                required
              />
            )}
            <input
              className="outline-none border-[#c9c9c9] border-[1px] p-[10px] rounded-[30px]"
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your email"
              required
            />
            <input
              className="outline-none border-[#c9c9c9] border-[1px] p-[10px] rounded-[30px]"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type='submit' className="border-none p-[10px] rounded-[30px] text-[white] bg-[#FFEA00] text-[15px] cursor-pointer">
            {loading ? '...' : (currState === 'Sign Up' ? 'Create account' : 'Login')}
          </button>
          <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
            <input className="mt-[4px]" type="checkbox" required />
            <p className="">
              By continuing, i agree to the terms of use & privacy policy
            </p>
          </div>
          {currState === 'Login' ? (
            <p className="flex  justify-center">
              Create a new account?{' '}
              <span onClick={() => setCurrState('Sign Up')} className="text-[#FFEA00] font-[500] cursor-pointer">
                Click here
              </span>
            </p>
          ) : (
            <p className="flex  justify-center">
              Already have an account?{' '}
              <span onClick={() => setCurrState('Login')} className="text-[#FFEA00] font-[500] cursor-pointer">
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
