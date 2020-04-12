import React from "react";
import Chart from "./Chart";

import "../assets/css/ContainerCharts.css";

const Container = (props) => {
  const { children } = props;
  return <div className="ContainerChart">{children}</div>;
};

const ContainerCharts = (props) => {
  const { charts } = props;
  return (
    <div className="ContainerCharts">
      {charts.map((chart, key) => {
        return (
          <Container key={key}>
            <Chart data={chart.data} type={chart.type} />
          </Container>
        );
      })}
    </div>
  );
};

export default ContainerCharts;
