import React from "react";
import "./comingSoon.scss";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

function ComingSoon() {
  return (
    <div className="comingSoon">
      <Nav />
      <div className="comingSoon__content">
        <h1 className="comingSoon__title"> Comming Soon</h1>

        <img
          src={require("../../img/logo.png")}
          alt="Movie Logo"
          className="comingSoon__logo"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ComingSoon;
