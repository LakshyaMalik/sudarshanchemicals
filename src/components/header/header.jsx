
import './header.css';
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <div className='header'>

      <div className='h-item'>
      <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/alpha.png?alt=media&token=2078074c-5124-4e5f-a2ce-8fa60db4b9fb" alt="Alpha Sudarshan" />
      </div>

      <div className='h-item h-info'>
        <h1><GoClock/></h1>
        <p> Monday - Saturday 09:30 - 18:30 (IST) <br /> Sunday - Closed</p>
      </div>

      <div className='h-item h-info address'>        
      <a href="https://maps.app.goo.gl/dZbREF94P3qK9DQRA" target="_blank" rel="noopener noreferrer">
        <h1><IoLocationOutline/></h1></a>
        <p> 9I, Indraprastha Industrial Area<br />Chambal Industrial Area<br />Road near Rajasthan Patrika Kota,<br />Rajasthan 324007 India </p>
      </div>

      <div className='h-item h-info'>
        <h1><IoPhonePortraitSharp /></h1>
        <p>+91-9414188018, 0744 2362345 <br /> sudarshanchemicals@gmail.com</p>
      </div>
      

    </div>
  );
};





