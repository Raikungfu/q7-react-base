import "./menu.scss";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import React, { useState, useEffect } from "react";
import Menu from "./MenuDB";
import ReactLogo from '../../../assets/react.svg';


interface TMenuProps {
  menu: {
    "Main-title": string;
    Content: {
      title: string;
      content: { name: string; link: string }[];
    }[];
  };
}

interface TCategory {
  item: {
    title: string;
    content: { name: string; link: string }[];
  };
}


const MenuComp: React.FC<TMenuProps> = ({ menu }) => {
  const CategoryComp: React.FC<TCategory> = ({ item }) => {
    const [isClickMenu, setIsClickMenu] = useState(false);
    const handleMenuClick = () => {
      setIsClickMenu(!isClickMenu);
    };

    return (
      <>
      <div>
          <a className={`nav-text-title ${item["content"] ? "has-arrow" : ""} ${isClickMenu ? "dropdownNarrow" : "backNarrow"}`} onClick={handleMenuClick}>
            <i className="bi bi-grid"></i>
            <span>{item["title"]}</span>
          </a>
      </div>
        
        <ul className={`overflow-hidden transition-all duration-500 ease-in-out ${isClickMenu ? "max-h-screen" : "max-h-0"}`}>
            {item["content"].map((listItem) => (
              <a href={listItem["link"]}>
                <li className="submenu-text">
                  <span className="line"></span>
                  <span>{listItem["name"]}</span>
                </li>
              </a>
            ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <ul className="menu">
        <li className="nav-title">{menu["Main-title"]}</li>
        <li className="nav-text">
          {menu["Content"].map((item) => (
            <CategoryComp item={item} />
          ))}
        </li>
      </ul>
    </>
  );
};

interface TMenuComp {
  isClickActiveMenu: boolean;
  onIsMenuActiveChange: (newIsMenuActive: boolean) => void;
}




const MenuComponent: React.FC<TMenuComp> = ({isClickActiveMenu, onIsMenuActiveChange}) => {
  const [isScreenSmall, setIsScreenSmall] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const handleResize = () => {
    setIsScreenSmall(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])


  useEffect(() => {
    setIsActive(!isActive);
    onIsMenuActiveChange(!isActive)
  }, [isClickActiveMenu])

  useEffect(() => {
    setIsActive(!isScreenSmall);
    onIsMenuActiveChange(!isScreenSmall)
  }, [isScreenSmall])

  return (
    <div className={`relative ${(!isActive) ? "" : "hiddenTitleNav"}`}>
      <div className="overflow-hidden transition-all duration-500 ease-in-out">
            <div className="flex flex-row flex-none items-center justify-start header-left pl-3 nav-header ">
                      <img src={ReactLogo} alt="Logo React" className="logo" />
                      <h1 className={`text-l font-extrabold text-white`}>Q7 ReactJS Base</h1>
            </div>
        <div className="nav-bar fixed">
          <nav>
            <MenuComp menu={Menu[0]} />
            <MenuComp menu={Menu[1]} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
