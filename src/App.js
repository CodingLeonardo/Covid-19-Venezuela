import React, { Component } from "react";
import getCases from "./utils/getCases";
import Layout from "./components/Layout";
import Cases from "./components/Cases";
import PageLoading from "./components/PageLoading";
import "./assets/css/styles.css";
import Chart from "./components/Chart";

class App extends Component {
  state = {
    confirmed: [],
    recovered: [],
    deaths: [],
  };

  async fetchData() {
    const confirmed = await getCases("confirmed");
    const recovered = await getCases("recovered");
    const deaths = await getCases("deaths");
    this.setState({
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
    });
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
      return <PageLoading />;
    }
    if (
      this.state.confirmed.length > 0 &&
      this.state.recovered.length > 0 &&
      this.state.deaths.length > 0
    ) {
      return (
        <>
          <Layout>
            <div className="container-flex flex-col w-screen px-4 py-4 shadow-2xl bg-primary-300">
              <div>
                <h1 className="text-5xl text-center mobile-s:text-4xl mobile-m:text-4xl mobile-l:text-4xl text-gray-900 ">
                  Covid-19 - <span className="text-primary-500">Ven</span>
                  <span className="text-tertiary-300">ezu</span>
                  <span className="text-secondary-300">ela</span>
                </h1>
              </div>
              <div className="container-flex flex-col w-10/12 h-almost-chart bg-primary-300 mb-4">
                <Chart
                  type="Line"
                  data={{
                    confirmed: this.state.confirmed,
                    recovered: this.state.recovered,
                    deaths: this.state.deaths,
                  }}
                />
              </div>
              <div className="container-flex flex-col w-10/12 h-almost-chart bg-primary-300">
                <Chart
                  type="Pie"
                  data={{
                    confirmed: this.state.confirmed,
                    recovered: this.state.recovered,
                    deaths: this.state.deaths,
                  }}
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
