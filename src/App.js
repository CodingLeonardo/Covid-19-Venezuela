import React, { Component, lazy, Suspense } from "react";
import getCases from "./utils/getCases";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ContainerCharts from "./components/ContainerCharts";
import PageLoading from "./components/PageLoading";
import LazyLoad from "react-lazyload";

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
    try {
      const confirmed = await getCases("confirmed");
      const recovered = await getCases("recovered");
      const deaths = await getCases("deaths");
      this.setState({
        data: {
          confirmed: confirmed,
          recovered: recovered,
          deaths: deaths,
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  renderCharts() {
    if (this.state.loading) {
      return <PageLoading />;
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
