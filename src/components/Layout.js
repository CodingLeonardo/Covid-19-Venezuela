import React from "react";
import Footer from "./Footer";
import Particles from "./Particles";

const Layout = props => {
  const { children } = props;
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center h-almost">
        <Particles>{children}</Particles>
      </div>
      <div className="h-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
