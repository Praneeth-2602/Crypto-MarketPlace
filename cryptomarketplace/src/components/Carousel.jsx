import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const carouselContainer = document.querySelector(".carouselContainer");
    const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
    const allEachCarousel = document.querySelectorAll(".eachCarousel");

    setCarouselWidth(eachCarousel * allEachCarousel.length);
  }, []);

  const slideCarousel = (index) => {
    const allIndicator = document.querySelectorAll(".indicator");

    for (let x = 0; x < allIndicator.length; x++) {
      if (x === index) {
        allIndicator[x].classList.add("activeIndicator");
      } else {
        allIndicator[x].classList.remove("activeIndicator");
      }
    }

    setCurrentIndex(index);
  };

  return (
    <>
      <div className="carouselContainer" style={{ width: carouselWidth }}>
        {/* First Carousel Item */}
        <div className="eachCarousel eachCarouselBorder">
          <img src="./img/bitcoin-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Bitcoin</h1>
            <p className="carouselPara">Bitcoin is an innovative payment network</p>
            <div className="carouselPrice">
              <h3>$34,000</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">15%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
        </div>
        {/* Add other Carousel Items similarly */}
        {/* Second Carousel Item */}
        <div className="eachCarousel eachCarouselBorder">
          <img src="./img/ethereum-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Ethereum</h1>
            <p className="carouselPara">Ethereum is a decentralized platform</p>
            <div className="carouselPrice">
              <h3>$2,000</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">10%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
          </div>
        {/* Third Carousel Item */}
        <div className="eachCarousel eachCarouselBorder">
          <img src="./img/ripple-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Ripple</h1>
            <p className="carouselPara">Ripple is a digital payment protocol</p>
            <div className="carouselPrice">
              <h3>$0.5</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">5%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
          </div>
        {/* Fourth Carousel Item */}
        <div className="eachCarousel eachCarouselBorder">
          <img src="./img/litecoin-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Litecoin</h1>
            <p className="carouselPara">Litecoin is a peer-to-peer cryptocurrency</p>
            <div className="carouselPrice">
              <h3>$150</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">20%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
          </div>
        {/* Fifth Carousel Item */}
        <div className="eachCarousel eachCarouselBorder">
          <img src="./img/cardano-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Cardano</h1>
            <p className="carouselPara">Cardano is a proof-of-stake blockchain platform</p>
            <div className="carouselPrice">
              <h3>$1.5</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">7%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
          </div>
        {/* Sixth Carousel Item */}
        <div className="eachCarousel">
          <img src="./img/dogecoin-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Dogecoin</h1>
            <p className="carouselPara">Dogecoin is a cryptocurrency</p>
            <div className="carouselPrice">
              <h3>$0.3</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">3%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
        </div>
        {/* Seventh Carousel Item */}
        <div className="eachCarousel">
          <img src="./img/bitcoin-icon.png" alt="" />
          <article className="carouselDesc">
            <h1 className="carouselTitle">Bitcoin</h1>
            <p className="carouselPara">Bitcoin is an innovative payment network</p>
            <div className="carouselPrice">
              <h3>$34,000</h3>
              <span className="rect"></span>
              <h3 className="carouselDiscount">15%</h3>
            </div>
            <button className="btn carouselBtn">Buy &amp; Trade</button>
          </article>
          </div>
      </div>
      {/* Carousel Indicator */}
      <div className="carouselIndicator">
        <div className="indicator activeIndicator" onClick={() => slideCarousel(0)}></div>
        <div className="indicator" onClick={() => slideCarousel(1)}></div>
        <div className="indicator" onClick={() => slideCarousel(2)}></div>
        <div className="indicator" onClick={() => slideCarousel(3)}></div>
        <div className="indicator" onClick={() => slideCarousel(4)}></div>
        <div className="indicator" onClick={() => slideCarousel(5)}></div>
      </div>
    </>
  );
};

export default Carousel;
