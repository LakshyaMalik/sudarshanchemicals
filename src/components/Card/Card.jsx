import './Card.css';
import { useNavigate } from 'react-router-dom';
import { BsFiletypePdf } from "react-icons/bs";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleDownloadBrochure = () => {
    // Assuming product.brochure is the URL to the PDF
    window.open(product.brochure, '_blank');
  };

  const handleEnquire = () => {
    navigate('/enquiry');
  };

  return (
    <div className="Card">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="Card-details">
        <h1>{product.name}</h1>
        <h4>{product.description}</h4>
        <div className="Card-buttons">
          <button className="Card-button" onClick={handleDownloadBrochure}><BsFiletypePdf /> Download Brochure </button>
          <button className="Card-button" onClick={handleEnquire}>
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
