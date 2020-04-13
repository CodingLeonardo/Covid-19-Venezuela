import * as React from "react";
import { Line, Pie } from "react-chartjs-2";
import Covid19 from "@leonardor16/covid-19-proyection";

const Chart = (props) => {
  const { data, type } = props;
  const { confirmed, recovered, deaths } = data;
  if (type === "Line") {
    return (
      <LineChart
        title={"Todos los casos desde el primer reporte COVID-19 Venezuela"}
        data={{
          labels: confirmed.map((item) =>
            new Intl.DateTimeFormat("es-VE", {
              month: "long",
              day: "numeric",
            }).format(new Date(item.Date))
          ),
          datasets: [
            {
              label: "Confirmados",
              data: confirmed.map((item) => item.Cases),
              borderColor: "#E8BF13",
            },
            {
              label: "Recuperados",
              data: recovered.map((item) => item.Cases),
              borderColor: "#01113E",
            },
            {
              label: "Muertes",
              data: deaths.map((item) => item.Cases),
              borderColor: "#A4061C",
            },
          ],
        }}
      />
    );
  }

  if (type === "Pie") {
    const totalConfirmed = confirmed[confirmed.length - 1].Cases;
    const totalRecovered = recovered[recovered.length - 1].Cases;
    const totalDeaths = deaths[deaths.length - 1].Cases;
    return (
      <PieChart
        data={{
          labels: ["Confirmados", "Recuperados", "Muertes"],
          datasets: [
            {
              backgroundColor: ["#E8BF13", "#01113E", "#A4061C"],
              borderColor: ["#E8BF13", "#01113E", "#A4061C"],
              data: [totalConfirmed, totalRecovered, totalDeaths],
            },
          ],
        }}
      />
    );
  }

  if (type === "LineProyection") {
    const covid = new Covid19();
    const confirmedProyection = covid.proyectionRange(
      30,
      confirmed[confirmed.length - 1].Cases,
      confirmed[confirmed.length - 2].Cases
    );
    return (
      <LineChart
        title={"Proyeccion de los casos confirmados de COVID-19 Venezuela"}
        data={{
          labels: confirmedProyection.map((item) => `${item.Day} Dia`),
          datasets: [
            {
              label: "Confirmados",
              data: confirmedProyection.map((item) => item.Cases),
              borderColor: "#E8BF13",
            },
          ],
        }}
      />
    );
  }

  return "";
};

const LineChart = (props) => {
  const { data, title } = props;
  return (
    <Line
      width={0}
      height={0}
      data={data}
      options={{
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },

        title: {
          display: true,
          text: title,
          fontSize: 20,
          padding: 30,
          fontColor: "#01113E",
        },
        legend: {
          position: "bottom",
          labels: {
            padding: 25,
            boxWidth: 25,
            fontColor: "black",
          },
        },
        tooltips: {
          backgroundColor: "#072D95",
          titleFontSize: 20,
          xPadding: 20,
          yPadding: 20,
          bodyFontSize: 15,
          bodySpacing: 10,
          mode: "x-axis",
        },
        elements: {
          line: {
            borderWidth: 4,
            fill: false,
          },
          point: {
            // radius: 4,
            borderWidth: 2,
            // hoverRadius: 6,
            // hoverBorderWidth: 4,
            backgroundColor: "white",
          },
        },
      }}
    />
  );
};

const PieChart = (props) => {
  const { data } = props;
  return (
    <Pie
      width={0}
      height={0}
      data={data}
      options={{
        title: {
          display: true,
          text: "Todos los casos totales de COVID-19 Venezuela",
          fontSize: 20,
          padding: 30,
          fontColor: "#01113E",
        },
        legend: {
          position: "bottom",
          labels: {
            padding: 25,
            boxWidth: 25,
            fontColor: "black",
          },
        },
        tooltips: {
          backgroundColor: "#072D95",
          titleFontSize: 20,
          xPadding: 20,
          yPadding: 20,
          bodyFontSize: 15,
          bodySpacing: 10,
        },
        elements: {
          arc: {},
        },
      }}
    />
  );
};

export default Chart;
