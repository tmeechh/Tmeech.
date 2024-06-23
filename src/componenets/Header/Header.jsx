import './Header.css';
import  { useEffect, useState } from 'react';

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const spans = document.querySelectorAll('.text-animation span');

    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, index * 500);
    });

    setVisible(true);
  }, []);
  return (
    <>
      <div className="header h-[34vw] my-[30px] mx-auto bg-contain relative">
        <div className="header-contents  flex flex-col absolute  items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] ">
        <h2 className={`text-animation text-[max(4vw,22px)] text-white ${visible ? 'visible' : ''}`}>
      <span>Delight</span>
      <span>Your</span>
      <span>Taste</span> <br />
      <span>Buds</span>
      <span>Here</span>
    </h2>
          <p className="text-white text-[1vw] tex-[50px]">
            Savor a menu filled with delightful dishes, crafted with top-quality
            ingredients and culinary skill. Our goal is to satisfy your cravings
            and enhance your dining experience, one delicious meal at a time.
          </p>
          <a href='#explore-menu' className="text-[#747474] font-[500] py-[1vw] px-[2.3vw] bg-white text-[(1vw,13px)] border-none rounded-[50px]">
            View Menu
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
