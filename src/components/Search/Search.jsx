import React, { useState, useEffect, useMemo } from "react";
import Card from '../Card/Card';
import './Search.css';
import axios from 'axios';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://rest-api-sudarshanchemicals.vercel.app/productList.json');
        setFilterSearch(response.data.productList);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredSearch = useMemo(() => {
    return filterSearch.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, filterSearch]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="Search">
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>

      <div className="s-results">
        <p>Check our product range</p>

        <ul className="s-ul">
          {searchTerm &&
            filteredSearch.map((product) => (
              <li key={product.id}>
                <Card product={product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
