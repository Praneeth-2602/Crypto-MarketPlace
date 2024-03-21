import React from 'react';
import './Markets.css'; // Import your CSS if it's defined in an external file

const MarketSection = () => {
  return (
    <section className="gridSection">
      <div className="sectionDesc marketDesc">
        <h1 className="sectionHeader">Market At Your Fingers</h1>
        <p className="sectionPara">The Blockchain is a decentralized, digital ledger of transactions that are recorded and confirmed.</p>
        <div className="eachMarket">
          <img src="./img/buy-icon-color.svg" alt="handshake" />
          <div>
            <h1 className="marketTitle">Buying</h1>
            <p className="darkPara">
              Best cryptocurrency exchanges currently purchase Bitcoin, Ethereum, and Litecoin other coins and tokens on the platform.
            </p>
          </div>
        </div>
        <div className="eachMarket">
          <img src="./img/trading-icon-color.svg" alt="handshake" />
          <div>
            <h1 className="marketTitle">Trading</h1>
            <p className="darkPara">
              The act of speculating on cryptocurrency price movements via a CFD trading account, or buying and selling.
            </p>
          </div>
        </div>
        <div className="eachMarket">
          <img src="./img/support-icon-color.svg" alt="handshake" />
          <div>
            <h1 className="marketTitle">Supporting</h1>
            <p className="darkPara">
              Don’t worry if you’re new to crypto and digital currencies – Skrill makes setting up a cryptocurrency wallet easy.
            </p>
          </div>
        </div>
        <div className="eachMarket">
          <img src="./img/online-icon-color.svg" alt="handshake" />
          <div>
            <h1 className="marketTitle">Online</h1>
            <p className="darkPara">
              Cryptocurrency, especially Bitcoin, has proven to be a popular trading vehicle, even for legendary investors.
            </p>
          </div>
        </div>
      </div>
      <div className="sectionPic marketspicSection" id="sectionPic">
        <h1 className="marketspicHeader">CRYPTOCURRENCY</h1>
        <div className="marketsPicContainer">
          <div className="marketPic marketPic1">
            <img src="./img/persent-icon-white.svg" alt="" />
            <article className="marketTitle">Hot Sale</article>
          </div>
          <div className="marketPic marketPic2">
            <img src="./img/bitcoin-icon-white.svg" alt="" />
            <article className="marketTitle">Bitcoin</article>
          </div>
          <div className="marketPic marketPic3">
            <img src="./img/ethereum-white-icon.svg" alt="" />
            <article className="marketTitle">ETHEREUM</article>
          </div>
          <div className="marketPic marketPic4">
            <img src="./img/handshake-icon-white.svg" alt="" />
            <article className="marketTitle">CONNECTING</article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
