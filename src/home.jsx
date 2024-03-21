import React from "react";
import App from "./Router";

const Home = () => {
  return (
    <>
    <div id="landing-page">
    <App />
      <div className="dash-box">
        <div className="promo-boxes">
          <div id="box" className="interest-box">
            <h2>High Interest Rates!</h2>
          </div>
          <div id="box" className="rebate-box">
            <h2>Rebates on our Card!</h2>
          </div>
          <div id="box" className="cashback-box">
            <h2>Cashbacks!</h2>
          </div>
          <div id="box" className="cashback-box">
            <h2>Cashbacks!</h2>
          </div>
          <div id="box" className="cashback-box">
            <h2>Cashbacks!</h2>
          </div>
          <div id="box" className="cashback-box">
            <h2>Cashbacks!</h2>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
