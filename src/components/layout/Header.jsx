import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="assests/logo-safemoon.svg"
              style={{ width: "50px" }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white underline"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Swap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Merch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Markets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  How to Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
