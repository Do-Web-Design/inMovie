import React, { useEffect, useState } from "react";
import "./nav.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <Fragment>
      <div className={`nav ${show && "nav__bg"}`}>
        <div className="nav__left">
          <Link to="/">
            <img
              src={require("../../img/logo.png")}
              alt="Movie Logo"
              className="nav__logo"
            />
          </Link>
          <div className="nav__links">
            <Link className="nav__link" to="/">
              <img
                src={require("../../img/home_icon.png")}
                alt="Home Icon"
                className="nav__link--icon"
              ></img>
              Main page
            </Link>

            <Link className="nav__link" to="/searchPage">
              <img
                src={require("../../img/search_icon.png")}
                alt="Search Icon"
                className="nav__link--icon"
              ></img>
              Search
            </Link>

            <Link className="nav__link" to="/comingSoon">
              <img
                src={require("../../img/plus_icon.png")}
                alt="My list Icon"
                className="nav__link--icon"
              ></img>
              My list Search
            </Link>

            <Link className="nav__link" to="/comingSoon">
              <img
                src={require("../../img/star_icon.png")}
                alt="Originals Icon"
                className="nav__link--icon"
              ></img>
              Originals
            </Link>

            <Link className="nav__link" to="/comingSoon">
              <img
                src={require("../../img/movie_icon.png")}
                alt="Movie Icon"
                className="nav__link--icon"
              ></img>
              Movies
            </Link>

            <Link className="nav__link" to="/comingSoon">
              <img
                src={require("../../img/serie_icon.png")}
                alt="Serie Icon"
                className="nav__link--icon"
              ></img>
              Series
            </Link>
          </div>
        </div>
        <div className="nav__right">
          <Link className="nav__link" to="/comingSoon">
            Ola
            <img
              src={require("../../img/user_image.png")}
              alt="Home Icon"
              className="nav__user-image"
            ></img>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Nav;
