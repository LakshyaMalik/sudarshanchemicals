import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import axios from 'axios';

import "./intro.css";


export const Intro = () => {
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const topProductIds = ["ase2106f", "ase101", "ase1015", "ase151h"];
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLimitedProducts = async () => {
      try {
        const response = await axios.get('https://rest-api-sudarshanchemicals.vercel.app/productList.json');
        const filteredProducts = response.data.productList.filter((product) => topProductIds.includes(product.id));
        setLimitedProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching limited products:', error);
        setError('Error fetching limited products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchLimitedProducts();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className="intro">
      <div className="col">
        <h3>Manufacturers And Suppliers Laboratory Equipment</h3>
        <p>
          Registered in 2010, India Sudarshan Chemicals has gained immense expertise in supplying & trading of Instrument furniture, table, chair etc. The supplier company is located in Kota, Rajasthan and is one of the leading sellers of listed products. Buy Instrument furniture, table, chair in bulk from us for the best quality products and service.
        </p>
        <Link to="/about">
          <button>About us</button>
        </Link>
      </div>

      <div className="col idiv">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/Bauji.png?alt=media&token=f63f0e0b-dab0-4762-9e1e-bfa248a4de80"
          alt="Image of Bauji" // Provide descriptive alt text
        />
      </div>

      <div className="prod">
        <h3>Our Top Products</h3>
        {loading ? (
          <p>Loading top products...</p> // Consistent loading message
        ) : error ? (
          <p>{error}</p> // Display error message to the user
        ) : (
          <div className="products">
            {limitedProducts.map((product) => (
              <div key={product.id} className="prod-item">
                <Card product={product} />
              </div>
            ))}
          </div>
        )}
        <Link id="prod-btn" to="/product">
          <button>View All Products</button>
        </Link>
      </div>
    </div>
  );
};
