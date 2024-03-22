import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="joinSection">
                <div className="joinDesc">
                    <h1 className="sectionHeader">Join with us</h1>
                    <p className="sectionPara">
                        Once you have created your account, you can purchase coins from website
                    </p>
                </div>
                <button className="btn primaryBtn">JOIN NOW</button>
            </div>

            <div className="footerlinksContainer">
                <div className="footerAboutus">
                    <img src="./img/logo-white.png" alt=""/>
                    <p className="darkPara">With no commissions and a simple user interface, Krypton is the most reliable way to
                        trade for Cryptocurrency.
                    </p>
                    <div className="footersociallinkContainer">
                        <img className="sociallink" src="./img/fabook-icon-white.svg" alt=""/>
                        <img className="sociallink" src="./img/twitter-icon-white.svg" alt=""/>
                        <img className="sociallink" src="./img/inkedin-icon-white.svg" alt=""/>
                        <img className="sociallink" src="./img/whatsapp-icon-white.svg" alt=""/>
                    </div>
                </div>

                <div className="footerlink">
                    <h1 className="linkTitle">Explore</h1>
                    <a href="#" className="eachLink">About us</a>
                    <a href="#" className="eachLink">FAQ</a>
                    <a href="#" className="eachLink">Blog</a>
                    <a href="#" className="eachLink">Contact</a>
                </div>

                <div className="footerlink">
                    <h1 className="linkTitle">Service</h1>
                    <a href="#" className="eachLink">Mining</a>
                    <a href="#" className="eachLink">Control Data</a>
                    <a href="#" className="eachLink">Design</a>
                    <a href="#" className="eachLink">Security</a>
                </div>

                <div className="footerlink">
                    <h1 className="linkTitle">Resource</h1>
                    <a href="#" className="eachLink">Style Guide</a>
                    <a href="#" className="eachLink">Change Log</a>
                    <a href="#" className="eachLink">License</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;