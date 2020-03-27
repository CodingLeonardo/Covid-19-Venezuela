import React, { Component } from "react";
import Cases from "./components/Cases";
import getCases from "./utils/getCases";
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
          <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center shadow-2xl h-64 rounded">
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
