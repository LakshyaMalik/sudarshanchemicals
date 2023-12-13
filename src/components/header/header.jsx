
import './header.css';
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <div className='header'>

      <div className='h-item'><h1>Sudarshan Chemicals</h1></div>

      <div className='h-item h-info'>
        <h1><GoClock/></h1>
        <p> Monday - Saturday 09:00 - 18:30 (IST) <br /> Sunday - Closed</p>
      </div>

      <div className='h-item h-info'>
        <h1><IoLocationOutline/></h1>
        <p> Sudarshan Chemicals Sudarshan Building,<br /> Jhalawar Road, Kota 324007 (India)</p>
      </div>

      <div className='h-item h-info'>
        <h1><IoPhonePortraitSharp /></h1>
        <p>+91-9414188018, +91-00000000 <br /> sudarshanchemicals@gmail.com</p>
      </div>
      

    </div>
  );
};





