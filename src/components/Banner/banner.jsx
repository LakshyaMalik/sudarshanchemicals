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
        'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Fcard.jpg?alt=media&token=be57e722-cec3-4728-93dd-196316525cf0',
      text: 'Since 2010',
      linkUrl:"/about",
      buttonText: 'Know more >>',
    },
    {
      id: 2,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Fsudarshanchemicalbanner2.jpg?alt=media&token=a5dea5c2-fbbe-4629-bef7-5b5a20dfdfda',
      text: 'Manufacturer Of Scientific Goods,Laboratory Chemicals, Laboratory Glass wares,',
      text2: "Hospital Furniture,Medical & Scientific Equipment's for",
      text3: "Biochemistry, Physiology, Anatomy, Microbiology, Pathology, Pharmacology, Forensic Department and others.",
      text4: "Complete setup for New Medical College Equipment's as per NMC norms with ISO, European CE Certified",
      linkUrl:"/contact",
      buttonText: 'Contact Us >>',
    },
    {
      id: 3,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Fsudarshanchemicalbanner3.jpg?alt=media&token=2469b200-e8ca-4353-a9e1-f1f1c0b1c4f4',
      text: 'Check Our Wide Range Products',
      linkUrl:"/product",
      buttonText: 'Our Products >>',
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
          <div className="tg">
          <h3>{slides[currentSlide].text}</h3>
          <h3>{slides[currentSlide].text2}</h3>
          <h3>{slides[currentSlide].text3}</h3>
          <h3>{slides[currentSlide].text4}</h3>
          </div>
          <Link to={slides[currentSlide].linkUrl}>
            <button>{slides[currentSlide].buttonText}
          </button></Link>
          
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
