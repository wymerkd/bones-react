import React from 'react';
import Header from './Header'
import house from '../assets/images/house.png';

function Home() {
  return(
    <div>
      <Header/>
      <div>
        <img src={house} alt='cool house'/>
      </div>
    </div>
  );
}

export default Home;
