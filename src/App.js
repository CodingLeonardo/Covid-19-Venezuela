import React from "react";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center shadow-2xl h-64 rounded">
          <div className="flex items-center justify-center flex-col w-1/3 p-6 h-full">
            <h1 className="text-2xl">Confirmados</h1>
            <span>107</span>
          </div>
          <div className="flex items-center justify-center flex-col w-1/3 p-6 h-full">
            <h1 className="text-2xl">Recuperados</h1>
            <span>36</span>
          </div>
          <div className="flex items-center justify-center flex-col w-1/3 p-6 h-full">
            <h1 className="text-2xl">Muertos</h1>
            <span>1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
