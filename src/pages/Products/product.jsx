import React, { useState, useEffect } from "react";
import './product.css';
import { Search } from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import axios from 'axios';

export const Product = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get('https://rest-api-sudarshanchemicals.vercel.app/productList.json');
        
        // Assuming the data structure has a "productList" key
        if (response.data && Array.isArray(response.data.productList)) {
          setProductList(response.data.productList);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching product list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
