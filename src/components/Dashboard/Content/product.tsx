import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/img/pic-3.a3a5f4d03926cf53a16dd.jpg';
import img2 from '../../../assets/img/pic-1.ccf464248c38e8f0cca0.jpg';
import img3 from '../../../assets/img/pic-3.a3a5f4d03926cf53a16d.jpg';
import './product.scss';

const Product = () => {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
  
    return () => {
      console.log('useEffect cleanup');
      clearInterval(interval);
    };
  }, [images.length]);
  

  return (
    <div className='slide-show relative w-full'>

    </div>
  );
};

export default Product;
