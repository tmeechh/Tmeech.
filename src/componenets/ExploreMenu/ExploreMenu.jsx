/* eslint-disable react/prop-types */
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="explore-menu flex flex-col gap-[20px]" id="explore-menu">
        <h1 className="text-[#262626] text-[25px] font-[500]">
          Explore our menu
        </h1>
        <p className="explore-menu-text max-w-[60%] text-[#808080]">
          Explore a diverse menu with a tempting selection of dishes. Our aim is
          to delight your taste buds and elevate your dining experience, one
          savory bite at a time.
        </p>
        <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll  ">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? 'All' : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={
                    category === item.menu_name
                      ? 'active border-[#FFEA00] border-[3px] p-[2px] w-[7.5vw] min-w-[80px] min-h-[80px] cursor-pointer rounded-[50%] transition-[0.2s]'
                      : 'w-[7.5vw] min-w-[80px] min-h-[80px] cursor-pointer rounded-[50%] transition-[0.2s]'
                  }
                  src={item.menu_image}
                  alt=""
                />
                <p className="mt-[10px]  text-[#747474] text-[]  cursor-pointer">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        <hr className="my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none" />
      </div>
    </>
  );
};

export default ExploreMenu;
