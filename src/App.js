import React, { Component } from "react";
import getCases from "./utils/getCases";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ContainerCharts from "./components/ContainerCharts";
import PageLoading from "./components/PageLoading";
import LazyLoad from "react-lazyload";
import PageError from "./components/PageError";
import getAllCases from "./utils/getCases";

class App extends Component {
  state = {
    charts: ["Line", "Pie"],
    data: {
      confirmed: [],
      recovered: [],
      deaths: [],
    },
    loading: false,
    error: null,
  };

  async fetchData() {
    this.setState({ loading: true });
    getAllCases().then(
      (data) => {
        this.setState({
          loading: false,
          data: {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
          },
        });
      },
      (error) => {
        console.log(error);
        this.setState({ loading: false, error: error });
      }
    );
  }

  renderCharts() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError message={this.state.error.message} />;
    }
    if (
      !this.state.loading &&
      this.state.data.confirmed.length > 0 &&
      this.state.data.recovered.length > 0 &&
      this.state.data.deaths.length > 0
    ) {
      return (
        <LazyLoad>
          <Header />
          <ContainerCharts
            charts={[
              {
                data: {
                  confirmed: this.state.data.confirmed,
                  recovered: this.state.data.recovered,
                  deaths: this.state.data.deaths,
                },
                type: "Line",
              },
              {
                data: {
                  confirmed: this.state.data.confirmed,
                  recovered: [],
                  deaths: [],
                },
                type: "LineProyection",
              },
              {
                data: {
                  confirmed: this.state.data.confirmed,
                  recovered: this.state.data.recovered,
                  deaths: this.state.data.deaths,
                },
                type: "Pie",
              },
            ]}
          />
        </LazyLoad>
      );
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <Layout>{this.renderCharts()}</Layout>
      </>
    );
  }
}

export default App;
