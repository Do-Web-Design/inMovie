import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__media">
            <Link to="/">
              <img
                className="footer__media--logo logo-link"
                alt="Surfo"
                src={require("../../img/logo.png")}
              />
            </Link>

            <ul className="footer__media--links">
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src={require("../../img/instagram_icon.png")}
                    alt="Instagram Icon"
                    className="nav__link--icon"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src={require("../../img/fb_icon.png")}
                    alt="Facebook Icon"
                    className="nav__link--icon"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  {" "}
                  <img
                    src={require("../../img/twitter_icon.png")}
                    alt="Twitter Icon"
                    className="nav__link--icon"
                  ></img>
                </a>
              </li>
            </ul>
            <p className="footer__description">
              Copyright &copy; <span className="year">2022</span> by inMovie,
              <br />
              Aleksandra Depta <br />
              Inc. All rights reserved.
            </p>
          </div>

          <div className="footer__contact">
            <a href="#popup__contact" className="footer__title">
              Contact us
            </a>
            <p className="footer__description">
              623 Amaizing St., 2nd Floor,
              <br />
              San Francisco, CA 94105
            </p>
            <p>
              <a className="footer__description" href="tel:215-23331-6120">
                215-23331-6120
              </a>
              <br />
              <a
                className="footer__description"
                href="mailto:hello@inmovie.com"
              >
                hello@inmovie.com
              </a>
            </p>
          </div>

          <div className="footer__account footer__flex">
            <p className="footer__title">Account</p>
            <ul className="footer__nav">
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Log in
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Sign up
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  iOS app
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Android app
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__company footer__flex">
            <p className="footer__title">Company</p>
            <ul className="footer__nav">
              <li>
                <Link className="footer__description" to="/comingSoon">
                  About inMovie
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  How we work
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Our team
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__resources footer__flex">
            <p className="footer__title">More</p>
            <ul className="footer__nav">
              <li>
                <Link className="footer__description" to="/comingSoon">
                  For Business
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Press
                </Link>
              </li>
              <li>
                <Link className="footer__description" to="/comingSoon">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
