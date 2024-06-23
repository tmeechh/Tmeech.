import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div
        className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]"
        id="footer"
      >
        <div className="footer-content xs:flex xs:flex-col xs:gap-[35px]   md:w-full md:grid md:grid-cols-[2fr,1fr,1fr] md:gap-[80px]">
          <div className="footer-content-left flex flex-col items-start gap-[20px] mt-[-9px]">
            <h1 className="logo text-[40px] mt-0 font-[900] text-[#FFEA00]">
              Tmeech.
            </h1>
            <p>
              Thank you for visiting us! Indulge in our diverse menu filled with
              delicious dishes crafted with the finest ingredients. Stay
              connected for updates and special offers. Follow us on social
              media for the latest news, exclusive deals, and culinary
              inspirations.
            </p>
            <div className="footer-social-icons flex">
              <img
                className="image cursor-pointer w-[40px] mr-[15px]"
                src={assets.twitter_icon}
                alt=""
              />
              <img
                className="image cursor-pointer  w-[40px] mr-[15px]"
                src={assets.facebook_icon}
                alt=""
              />
              <img
                className="image cursor-pointer  w-[40px] mr-[15px]"
                src={assets.linkedin_icon}
                alt=""
              />
              <img
                className="image   cursor-pointer  w-[40px] mr-[15px]"
                src={assets.instagram_icon}
                alt=""
              />
            </div>
          </div>
          <div className="footer-content-center  flex flex-col items-start gap-[20px]">
            <h2 className="text-[white] font-[900] text-[20px]">COMPANY</h2>
            <ul>
              <li className="mb-[10px] cursor-pointer">Home</li>
              <li className="mb-[10px] cursor-pointer">About Us</li>
              <li className="mb-[10px] cursor-pointer">Delivery</li>
              <li className="mb-[10px] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right  flex flex-col items-start gap-[20px]">
            <h2 className="text-[white] font-[900] text-[20px]">
              GET IN TOUCH
            </h2>
            <ul>
              <li className="mb-[10px] cursor-pointer">+234-451-340-453</li>
              <li className="mb-[10px] cursor-pointer">meecht64@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="w-full h-[2px] my-[20px] mx-[0px] bg-gray-400 border-none" />
        <p className="footer-copyright xs:text-center ">
          Copyright &copy; 2024 Tmeech.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
