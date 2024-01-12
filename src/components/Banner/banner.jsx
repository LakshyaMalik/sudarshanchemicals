import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Banner = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/images%2Fbanner1.jpg?alt=media&token=bbe3a6e3-414d-4204-8c77-d3f54d6a31ec',
      text: 'Manufacturer Of Scientific Goods, Laboratory Chemicals, Laboratory Glass wares,',
      text2: "Hospital Furniture, Medical & Scientific Equipment's for",
      text3: "Biochemistry, Physiology, Anatomy, Microbiology, Pathology, Pharmacology, Forensic Department and others.",
      text4: "Complete setup for New Medical College Equipment's as per NMC norms with ISO, European CE Certified",
      linkUrl: "/contact",
      buttonText: 'Contact Us >>',
    },
    {
      id: 2,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Fbanner2.jpg?alt=media&token=586cfb69-9fcc-4b0e-a447-ad5d570187a4',
      text: "SUDARSHAN CHEMICALS(Regd)",
      text2: "Rajasthan's First ISO 9001, CE, WHO, ISO-13485 Certified Company",
      linkUrl: "/about",
      buttonText: 'Know more >>',
    },
    {
      id: 3,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Fsudarshanchemicalbanner3.jpg?alt=media&token=2469b200-e8ca-4353-a9e1-f1f1c0b1c4f4',
      text: 'Check Our Wide Range Products',
      linkUrl: "/product",
      buttonText: 'Our Products >>',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="banner">
      <div className="banner-image" style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}>
        <div className="banner-content">
          <div className="tg">
            <h2>{slides[currentSlide].text}</h2>
            <h2>{slides[currentSlide].text2}</h2>
            <h2>{slides[currentSlide].text3}</h2>
            <h2>{slides[currentSlide].text4}</h2>
          </div>
          <Link to={slides[currentSlide].linkUrl}>
            <button>{slides[currentSlide].buttonText}</button>
          </Link>
        </div>
      </div>
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
