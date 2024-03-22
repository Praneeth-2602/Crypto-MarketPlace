import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Dashboard from "../components/Dashboard.jsx";


function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Carousel/>
            <Dashboard/>
            <Footer/>
        </div>
    );
}

export default Home;