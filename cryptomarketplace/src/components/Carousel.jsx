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
        allIndicator[x].classNameList.add("activeIndicator");
      } else {
        allIndicator[x].classNameList.remove("activeIndicator");
      }
    }

    setCurrentIndex(index);
  };

  return (
    <>
      <div className="carouselContainer">
            <div className="eachCarousel eachCarouselBorder">
                <img src="./img/bitcoin-icon.png" alt=""/>
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

            <div className="eachCarousel">
                <img src="./img/ethereum-icon.png" alt=""/>
                <article className="carouselDesc">
                    <h1 className="carouselTitle">Ethereum</h1>
                    <p className="carouselPara">Ethereum is open-source blockchain currency</p>
                    <div className="carouselPrice">
                        <h3>$25,600</h3>
                        <span className="rect"></span>
                        <h3 className="carouselDiscount">9%</h3>
                    </div>
                    <button className="btn carouselBtn">Buy &amp; Trade</button>
                </article>
            </div>

            <div className="eachCarousel">
                <img src="./img/tether-icon.png" alt=""/>
                <article className="carouselDesc">
                    <h1 className="carouselTitle">Tether</h1>
                    <p className="carouselPara">Tether is a stable coin cryptocurrency</p>
                    <div className="carouselPrice">
                        <h3>$7,000</h3>
                        <span className="rect"></span>
                        <h3 className="carouselDiscount">4%</h3>
                    </div>
                    <button className="btn carouselBtn">Buy &amp; Trade</button>
                </article>
            </div>

            <div className="eachCarousel">
                <img src="./img/bitcoin-icon.png" alt=""/>
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

            <div className="eachCarousel">
                <img src="./img/ethereum-icon.png" alt=""/>
                <article className="carouselDesc">
                    <h1 className="carouselTitle">Ethereum</h1>
                    <p className="carouselPara">Ethereum is open-source blockchain currency</p>
                    <div className="carouselPrice">
                        <h3>$25,600</h3>
                        <span className="rect"></span>
                        <h3 className="carouselDiscount">9%</h3>
                    </div>
                    <button className="btn carouselBtn">Buy &amp; Trade</button>
                </article>
            </div>

            <div className="eachCarousel">
                <img src="./img/tether-icon.png" alt=""/>
                <article className="carouselDesc">
                    <h1 className="carouselTitle">Tether</h1>
                    <p className="carouselPara">Tether is a stable coin cryptocurrency</p>
                    <div className="carouselPrice">
                        <h3>$7,000</h3>
                        <span className="rect"></span>
                        <h3 className="carouselDiscount">4%</h3>
                    </div>
                    <button className="btn carouselBtn">Buy &amp; Trade</button>
                </article>
            </div>
        </div>
        <div class="carouselIndicator">
          <div class="indicator activeIndicator" onClick={() => slideCarousel(0)}></div>
          <div class="indicator" onClick={() => slideCarousel(1)}></div>
          <div class="indicator" onClick={() => slideCarousel(2)}></div>
          <div class="indicator" onClick={() => slideCarousel(3)}></div>
          <div class="indicator" onClick={() => slideCarousel(4)}></div>
          <div class="indicator" onClick={() => slideCarousel(5)}></div>
      </div>
    </>
  );
};

export default Carousel;
