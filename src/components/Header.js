import React from "react";

import "../assets/css/Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h1 className="Header-title">
          Covid-19 - <span className="Header-ven">Ven</span>
          <span className="Header-ezu">ezu</span>
          <span className="Header-ela">ela</span>
        </h1>
      </div>
    </>
  );
};

export default Header;
