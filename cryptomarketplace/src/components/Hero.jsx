import React from 'react';

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src='P:\Praneeth\Nish ASSIGNMENTS\Crypto-MarketPlace\cryptomarketplace\src\assets\hero-image.png'  className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Most popular way to trade</h1>
          <p className="lead">You can see a record of all your transactions anytime you want and never have to worry about someone erasing or stealing your money!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
