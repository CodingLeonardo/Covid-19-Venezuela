import React, { Component } from "react";
import getCases from "./utils/getCases";
import Layout from "./components/Layout";
import Cases from "./components/Cases";
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
          <Layout>
            <div className="flex justify-center items-center flex-col">
              <div>
                <h1 className="text-5xl text-gray-900 ">
                  Covid-19 - <span className="text-primary-300">Ven</span>
                  <span className="text-tertiary-300">ezu</span>
                  <span className="text-secondary-300">ela</span>
                </h1>
              </div>
              <div className="container-flex shadow-2xl h-64 rounded bg-primary-300">
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
          </Layout>
        </>
      );
    }
    return "";
  }
}

export default App;
