import React from "react";

import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div>
          <h1>
            Designed with ❤ by{" "}
            <a
              href="https://github.com/CodingLeonardo"
              target="_blank"
              className="Footer-link"
              rel="noopener noreferrer"
            >
              @LeonardoCoding
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
