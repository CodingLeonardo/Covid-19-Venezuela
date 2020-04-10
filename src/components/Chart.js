import * as React from "react";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const Chart = (props) => {
  const { data, type } = props;
  const { confirmed, recovered, deaths } = data;

  if (type === "Line") {
    return (
      <Line
        width={0}
        height={0}
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
            text: "Todos los casos desde el primer reporte COVID-19 Venezuela",
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
  }

  if (type === "Pie") {
    const totalConfirmed = confirmed[confirmed.length - 1].Cases;
    const totalRecovered = recovered[recovered.length - 1].Cases;
    const totalDeaths = deaths[deaths.length - 1].Cases;
    console.log(totalConfirmed);
    return (
      <Pie
        width={0}
        height={0}
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
  }

  return "";
};

export default Chart;
