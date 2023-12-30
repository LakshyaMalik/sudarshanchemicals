import React from 'react';
import './Certificates.css';

export const Certificates = () => {
  const images = [
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Ftrade%20mark%20sudarshan%20(2)-1.svg?alt=media&token=e5611cc3-c32a-46dc-aebb-6e288c5ea2af', alt: 'Trademark' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Ftrade%20mark%20sudarshan%20(2)-2.svg?alt=media&token=c3fe858e-ed96-45ee-80aa-5fee6468fe96', alt: 'Trademark' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2Ftrade%20mark%20sudarshan%20(2)-3.svg?alt=media&token=2c888c3d-c983-4f76-a6c7-d2db3168b572', alt: 'Trademark' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FCE%20European%20Nortified%20Certified-1.jpg?alt=media&token=f598fd81-170b-4570-aed8-03ed08b9c5de', alt: 'CE European Certified' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FCE%20European%20Nortified%20Certified-2.jpg?alt=media&token=73f6688f-f397-4213-a981-8b02083f9c5b', alt: 'CE European Certified' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FCE%20European%20Nortified%20Certified-3.jpg?alt=media&token=9016f853-07d7-4537-9709-2d92861c478f', alt: 'CE European Certified' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FISO%20etc123-1.svg?alt=media&token=58e31d96-5df3-4cc7-ad40-1a94b31428ec', alt: 'ISO Certificate' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FISO%20etc123-2.svg?alt=media&token=b7723173-4678-4b31-b0d7-340eac396944', alt: 'ISO Certificate' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FISO%20etc123-3.svg?alt=media&token=d758d8be-5b4e-4164-bd10-b0d95717008e', alt: 'ISO Certificate' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FISO%20etc123-4.svg?alt=media&token=de466a48-56b0-4938-96f7-fa6261f63352', alt: 'ISO Certificate' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FISO%20etc123-5.svg?alt=media&token=505c75be-a236-4a54-b336-13f1dd486997', alt: 'ISO Certificate' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-1.svg?alt=media&token=bfd94037-8283-41e3-8aa4-514cf59c02ca', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-2.svg?alt=media&token=13459ce5-7d8b-47f7-bcdd-b06d4afb4ecb', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-3.svg?alt=media&token=4e1ae8ec-7259-43aa-9a31-ebb09052afd7', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-4.svg?alt=media&token=eb4229ba-7929-418e-9ced-d80494161cd6', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-5.svg?alt=media&token=409489bc-cbf0-45fc-aae3-9158cb138e7d', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-6.svg?alt=media&token=ef07fcbf-4763-43b0-a5c4-55fd8136489c', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-7.svg?alt=media&token=8f55552f-c6f3-4460-a83b-b9dded8a3f8f', alt: 'SSI Certificates' },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FSSI-8.svg?alt=media&token=a51c8709-9fd6-4ae0-8ff0-3ae516715107', alt: 'SSI Certificates' }
  ];

  return (
    <div className="Certificates">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className="image-item" loading="lazy"/>
      ))}
    </div>
  );
};

