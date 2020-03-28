import React, { Component } from "react";
import Cases from "./components/Cases";
import getCases from "./utils/getCases";
import Particles from "./components/Particles";
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
          <div className="container-screen bg-blue-800 absolute">
            <Particles />
            <div className="z-10">
              <h1 className="text-3xl text-gray-900 ">Covid-19 - Venezuela</h1>
            </div>
            <div className="container-flex shadow-2xl h-64 rounded bg-green-400 z-10">
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
        </>
      );
    }
    return "";
  }
}

export default App;
