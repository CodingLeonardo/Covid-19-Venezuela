import React from "react";

const Cases = props => {
  const { status, cases } = props;
  let bg;
  if (status === "Confirmados") {
    bg = `hover:bg-primary-500`;
  }
  if (status === "Recuperados") {
    bg = `hover:bg-tertiary-400`;
  }
  if (status === "Muertes") {
    bg = `hover:bg-secondary-400`;
  }
  return (
    <>
      <div
        className={`container-cases p-6 transition duration-500 rounded hover:text-white ${bg}`}
      >
        <h1 className="text-2xl">{status}</h1>
        <span>{cases}</span>
      </div>
    </>
  );
};

export default Cases;
