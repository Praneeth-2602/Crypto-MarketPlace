import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Carousel/>
        </div>
    );
}

export default Home;