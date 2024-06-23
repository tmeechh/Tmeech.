import { useState } from 'react';
import ExploreMenu from '../../componenets/ExploreMenu/ExploreMenu';
import Header from '../../componenets/Header/Header';
import './Home.css';
import FoodDisplay from '../../componenets/FoodDisplay/FoodDisplay';
import AppDownload from '../../componenets/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <>
      <div>
        <div>
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload/>
        </div>
      </div>
    </>
  );
};

export default Home;
