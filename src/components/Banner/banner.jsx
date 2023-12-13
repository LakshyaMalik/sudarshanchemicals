import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './banner.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Banner = () => {
  const slides = [
    {
      id: 1,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/musics-lakki.appspot.com/o/guitar%20sikhda%20img.jpg?alt=media&token=1f4d18b4-7603-4efd-83ed-f998a3107613',
      text: 'Slide 1 Text',
      linkUrl:"/product",
      buttonText: 'Our Products >',
    },
    {
      id: 2,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/musics-lakki.appspot.com/o/jaanitera%20na%20img.jpg?alt=media&token=5dafd80f-41c4-49b2-a96a-c262b8db4ded',
      text: 'Slide 2 Text',
      linkUrl:"/product",
      buttonText: 'Our Products >',
    },
    {
      id: 3,
      imageUrl:
        'https://imgs.search.brave.com/gyeHpJVRfa8X75WrnBB75SH6qcurvzXL511wwIMDa6s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaWtleS5jb20v/LS9tZWRpYS9NYWtl/cklPL0ltYWdlcy9i/bG9ncy8yMDIwL1Ro/ZSUyMEhhY2tzbWl0/aCUyMFRoZSUyMFdv/cmxkcyUyMEJyaWdo/dGVzdCUyMEZsYXNo/bGlnaHQvVGhlLUhh/Y2tzbWl0aC1UaGUt/V29ybGRzLUJyaWdo/dGVzdC1GbGFzaGxp/Z2h0LmpwZz9sYT1l/bi1VUyZ0cz1kM2Ji/MWExNC1mMjM3LTRi/ZTYtYjZjYy00MWQ5/Yzk4ZTNlZWM',
      text: 'Slide 3 Text',
      linkUrl:"/product",
      buttonText: 'Our Products >',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = useRef(currentSlide);

  const fadeInOutProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true, // Reset animation when props change
    onRest: () => {
      // Reset animation properties when the animation is complete
      prevSlide.current = currentSlide;
    },
  });

  useEffect(() => {
    // Check if the state has changed (slide transition)
    if (prevSlide.current !== currentSlide) {
      // Trigger fadeIn/fadeOut animation when the slide changes
      fadeInOutProps.opacity.reset();
    }
  }, [currentSlide, fadeInOutProps]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="banner">
      <animated.div
        className="banner-image"
        style={{
          ...fadeInOutProps,
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
        }}
      >
        <div className="banner-content">
          <h3>{slides[currentSlide].text}</h3>
          <Link to={slides[currentSlide].linkUrl}><button>{slides[currentSlide].buttonText}</button></Link>
          
        </div>
      </animated.div>
      <div className="controls">
        <button onClick={handlePrevSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
