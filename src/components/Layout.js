import React from "react";
import Footer from "./Footer";

import "../assets/css/Layout.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="Layout">
      <div className="Layout-app">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
