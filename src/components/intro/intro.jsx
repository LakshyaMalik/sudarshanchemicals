import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import productList from "../../assets/productList";

import "./intro.css";

export const Intro = () => {
 
  const limitedIds = ["ASE116", 3, 5, 7]; // Example IDs, replace with your actual IDs
  const limitedProducts = productList.filter((product) => limitedIds.includes(product.id));

  return (
    <div className="intro">
      <div className="col">
        <h3>Manufacturers And Suppliers Laboratory Equipment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum temporibus cumque ea deserunt a ipsa nesciunt
          autem voluptate, totam nihil officia quidem consequuntur consectetur minus? Cupiditate expedita ducimus rerum commodi!
          Adipisci eius itaque consectetur eum sit a, neque in!
        </p>
        <Link to="/about">
          <button>About us </button>
        </Link>
      </div>

      <div className="col idiv">
        <img
          src="https://imgs.search.brave.com/LmQs0MAaOXGHM5mJR4Jvrz--TAaYBX29_m7uAQXuTAc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE3LzE4Lzcx/LzM2MF9GXzUxNzE4/NzExOF9iMHN6bXVQ/bEtJSjJFb25xcTly/VHlBeWNxOHU3TG9T/aS5qcGc"
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
