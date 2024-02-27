import React, { useEffect, useState } from 'react';
import { Header, Menu, Content } from '..';

const Dashboard = () => {
    const [isClickActiveMenu, setIsActiveMenu] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(true)
    const handleMenuClick = () => {
      setIsActiveMenu((prevState) => !prevState);
    };
    return (
      <div>
          <Header isClickActiveMenu = {handleMenuClick} isMenuActive={isMenuActive}/>
          <div className='flex flex-row'>
            <div className='basis-[20%]'><Menu isClickActiveMenu={isClickActiveMenu} onIsMenuActiveChange={setIsMenuActive}/></div>
            <div className='grow'><Content/></div>
          </div>
      </div>
    );
  };

export default Dashboard;