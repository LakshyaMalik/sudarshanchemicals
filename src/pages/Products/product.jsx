import React from "react";
import './product.css';
import productList from '../../assets/productList';
import { Search } from "../../components/Search/Search";
import Card  from "../../components/Card/Card";

export const Product = () => {
  return (
    <div className="product">
      <Search />
      <h2>All Products</h2>
      <div className="products">
        {productList.map((product) => (
          <div key={product.id} className="product-item">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
