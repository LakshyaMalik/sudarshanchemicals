import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import productList from "../../assets/productList";

import "./intro.css";

export const Intro = () => {
 
  const limitedIds = ["ASE116", "ase1015" , "ase1016" , "ase101w"]; // Example IDs, replace with your actual IDs
  const limitedProducts = productList.filter((product) => limitedIds.includes(product.id));

  return (
    <div className="intro">
      <div className="col">
        <h3>Manufacturers And Suppliers Laboratory Equipment</h3>
        <p>
        Registered in 2010 ,India Sudarshan Chemicals has gained immense expertise in supplying & trading of Instrument furniture, table, chair etc. The supplier company is located in Kota, Rajasthan and is one of the leading sellers of listed products. Buy Instrument furniture, table, chair in bulk from us for the best quality products and service.
        </p>
        <Link to="/about">
          <button>About us </button>
        </Link>
      </div>

      <div className="col idiv">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/Bauji.png?alt=media&token=f63f0e0b-dab0-4762-9e1e-bfa248a4de80"
          alt="image"
        />
      </div>

      <div className="prod">
        <h3>Our Top Products</h3>
        <div className="products">
          {limitedProducts.map((product) => (
            <div key={product.id} className="prod-item">
              <Card product={product} />
            </div>
          ))}
        </div>
        <Link id="prod-btn" to="/product">
          <button>View All Products </button>
        </Link>
      </div>
    </div>
  );
};
