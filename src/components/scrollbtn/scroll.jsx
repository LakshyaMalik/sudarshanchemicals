
import React, { useState, useEffect } from "react";
import "./scroll.css"; // You can define your styles in a separate CSS file
import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 20px from the top
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      title="Go to top"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollBtn;
