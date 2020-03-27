import React from "react";

const Cases = props => {
  const { status, cases } = props;
  let bg;
  if (status === "Confirmados") {
    bg = `hover:bg-yellow-400 hover:text-yellow-900`;
  }
  if (status === "Recuperados") {
    bg = `hover:bg-blue-400 hover:text-blue-900`;
  }
  if (status === "Muertes") {
    bg = `hover:bg-red-400 hover:text-red-900`;
  }
  return (
    <>
      <div
        className={`flex items-center justify-center flex-col w-1/3 p-6 h-full transition duration-500 rounded ${bg}`}
      >
        <h1 className="text-2xl">{status}</h1>
        <span>{cases}</span>
      </div>
    </>
  );
};

export default Cases;
