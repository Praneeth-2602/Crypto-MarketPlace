import React from 'react';
import './ProcessSection.css'; // Import your CSS if it's defined in an external file

const ProcessSection = () => {
  return (
    <section>
        <div className="sectionDesc processessDesc">
        <h1 className="sectionHeader">Chain Process</h1>
        <p className="sectionPara">We do not charge any fees and we do not require any registration. You keep your privacy and your coins.</p>
        <div className="eachProcesses">
            <img src="./img/handshake-icon-white-line.svg" alt="handshake" />
            <div className="eachprocessesPara">
            <h1 className="processTitle">Trading</h1>
            <p className="blue-text">The act of speculating on cryptocurrency price movements via a CFD trading account, or buying and selling.</p>
            </div>
        </div>
        <div className="eachProcesses">
            <img src="./img/cart-icon-white-line.svg" alt="handshake" />
            <div className="eachprocessesPara">
            <h1 className="processTitle">Buying</h1>
            <p className="blue-text">Best cryptocurrency exchanges currently purchase Bitcoin, Ethereum, and Litecoin other coins and tokens on the platform.</p>
            </div>
        </div>
        </div>
        <div className="sectionPic bouncepic processesPic" id="sectionPic">
        <img src="./img/chain-process-img.png" alt="" />
        </div>
    </section>
  );
};

export default ProcessSection;
