import React from "react";

import "../assets/css/PageError.css";

const PageError = (props) => {
  const { message } = props;
  return (
    <>
      <div className="PageError">
        <h1 className="PageError-message">{message}</h1>
      </div>
    </>
  );
};

export default PageError;
