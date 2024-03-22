import React from "react";
import App from "./Router";
import NavBar from "./routes/NavBar";
import OtherHomeComponents from "./otherhomecomponents";

const Home = () => {
  return (
    <>
    <section id="landing-section">
    <NavBar />
      <div id="landing-page">
        <div className="dash-box">
          <div className="promo-boxes">
            <div id="box" className="interest-box">
              <h2>High Interest Rates!</h2>
            </div>
            <div id="box" className="rebate-box">
              <h2>No Annual Feeds on Our Card!</h2>
            </div>
            <div id="box" className="cashback-box">
              <h2>Cashbacks!</h2>
            </div>
            <div id="box" className="security-box">
              <h2>We Got Your Back!</h2>
            </div>
            <div id="box" className="tips-box">
              <h2><a href="https://smartasset.com/checking-account/top-5-ways-to-protect-your-bank-accounts" target="blank">Keeping Your Account Secure 🤓</a></h2>
              <h3>Click on the link to learn more!</h3>
            </div>
            <div id="box" className="customer-support">
              <h2>24/7 Customer Support!</h2>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div>
        <OtherHomeComponents/>
      </div>
    </>
  );
};

export default Home;
