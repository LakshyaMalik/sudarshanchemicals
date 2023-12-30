import React, { useState, useEffect } from 'react';
import './scrollup.css';
import { FaArrowUp } from "react-icons/fa";

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      {isVisible && (
        <div className="scrollbtn" onClick={handleScrollToTop}>
          <button><FaArrowUp /></button>
        </div>
      )}
    </>
  );
};
