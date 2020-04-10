import React from "react";
import Footer from "./Footer";
import Particles from "./Particles";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="h-full w-screen">
      <div className="flex justify-center items-center h-full">
        <Particles />
        <div className="z-20">{children}</div>
      </div>
      <div className="h-10 w-screen absolute z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
