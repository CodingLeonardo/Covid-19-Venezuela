import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-10 bg-tertiary-100 shadow-inner fixed inset-x-0 bottom-0">
        <div>
          <h1 className="text-white">
            Designed with ❤ by{" "}
            <a
              href="https://github.com/LeonardoCoding"
              target="_blank"
              className="underline"
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
