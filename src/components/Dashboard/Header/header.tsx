
import { useState } from 'react';
import Avt from '../../../assets/img/logo.jpeg';
import './header.scss'
import InputHeader from './input';


interface THeaderComp{
  isClickActiveMenu: () => void;
  isMenuActive: boolean;
}

const header: React.FC<THeaderComp> = ({isClickActiveMenu, isMenuActive}) => {
    return (
      <div className={`${isMenuActive ? "expand-header" : ""}`}>
        <header className="flex flex-row items-stretch justify-between w-full">
            <div className="flex flex-row items-center justify-start grow">
                <div className="basis-1/6 p-3">
                  <div className="active-menu" onClick={isClickActiveMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className='basis-3/6'>
                  <InputHeader/>
                </div>
            </div>
            <div className="basis-1/6 header-right">
              <img src={Avt} alt="" className='logo'/>
            </div>
      </header>
      </div>
    );
  };
  
  export default header;
  
