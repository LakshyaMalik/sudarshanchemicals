import React, { useState } from "react";
import productList from '../../assets/productList';
import Card from '../Card/Card';
import './Search.css';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSearch, setFilterSearch] = useState(productList);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filtered = productList.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()));
        setFilterSearch(filtered);
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
                    onChange={handleSearch}/>

            </form>


            <div className="s-results">
            <p>Check our product range</p>

            <ul className="s-ul">
                {searchTerm && filterSearch.map((product, i) => (
                    <li key={i}>
                        <Card product={product}/>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};
