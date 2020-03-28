import React, { Component } from "react";
import Cases from "./components/Cases";
import getCases from "./utils/getCases";
import Particles from "./components/Particles";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

class App extends Component {
  state = {
    confirmed: [],
    recovered: [],
    deaths: []
  };

  fetchData() {
    getCases("confirmed", this);
    getCases("recovered", this);
    getCases("deaths", this);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (
      !this.state.confirmed.length &&
      !this.state.recovered.length &&
      !this.state.deaths.length
    ) {
      return "loading...";
    }
    if (
      this.state.confirmed.length > 0 &&
      this.state.recovered.length > 0 &&
      this.state.deaths.length > 0
    ) {
      return (
        <>
          <div>
            <div className="container-screen absolute">
              <Particles />
              <div className="z-20">
                <h1 className="text-5xl text-gray-900 ">
                  Covid-19 - <span className="text-primary-300">Ven</span>
                  <span className="text-tertiary-300">ezu</span>
                  <span className="text-secondary-300">ela</span>
                </h1>
              </div>
              <div className="container-flex shadow-2xl h-64 rounded bg-primary-300 z-20">
                <Cases
                  status="Confirmados"
                  cases={
                    this.state.confirmed[this.state.confirmed.length - 1].Cases
                  }
                />
                <Cases
                  status="Recuperados"
                  cases={
                    this.state.recovered[this.state.recovered.length - 1].Cases
                  }
                />
                <Cases
                  status="Muertes"
                  cases={this.state.deaths[this.state.deaths.length - 1].Cases}
                />
              </div>
            </div>
            <div className="flex justify-end items-end h-screen w-screen absolute z-10">
              <Footer />
            </div>
          </div>
        </>
      );
    }
    return "";
  }
}

export default App;
