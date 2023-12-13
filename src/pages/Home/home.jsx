import React from "react";
import Banner from "../../components/Banner/banner";
import {Intro} from "../../components/intro/intro";

import './home.css';

export const Home = () => {
    return(

        <div className="home">
            <Banner />

            <Intro />

        </div>

    );

};