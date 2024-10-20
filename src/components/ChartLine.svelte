<script>
  import { afterUpdate } from "svelte";
  import Chart from "chart.js";

  export let data;
  export let title;

  let ctx;
  let chart;

  function totalCasesChart() {
    if (!data.length) {
      return;
    } else {
      ctx = document.getElementById("chartLine");
      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map(item =>
            new Intl.DateTimeFormat("es-VE", {
              month: "long",
              day: "numeric"
            }).format(new Date(item.Date))
          ),
          datasets: [
            {
              label: "Confirmados",
              data: data.map(item => item.Confirmed.Count),
              borderColor: "#E8BF13"
            },
            {
              label: "Recuperados",
              data: data.map(item => item.Recovered.Count),
              borderColor: "#01113E"
            },
            {
              label: "Muertes",
              data: data.map(item => item.Deaths.Count),
              borderColor: "#A4061C"
            }
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          title: {
            display: true,
            text: title,
            fontSize: 20,
            padding: 30,
            fontColor: "#01113E",
            fontFamily: "Fjalla One, sans-serif"
          },
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 25,
              fontColor: "black"
            }
          },
          tooltips: {
            backgroundColor: "#072D95",
            titleFontSize: 20,
            xPadding: 20,
            yPadding: 20,
            bodyFontSize: 15,
            bodySpacing: 10,
            mode: "x-axis"
          },
          elements: {
            line: {
              borderWidth: 4,
              fill: false
            },
            point: {
              //  radius: 4,
              borderWidth: 2,
              //  hoverRadius: 6,
              //  hoverBorderWidth: 4,
              backgroundColor: "white"
            }
          }
        }
      });
    }
  }

  async function renderCharts() {
    totalCasesChart(data);
  }

  afterUpdate(renderCharts);
</script>

<style>
  .container-chart {
    position: relative;
    height: 80vh;
    margin: 1em 0;
  }
  @media screen and (min-width: 320px) {
    .container-chart {
      height: 70vh;
    }
  }
</style>

<div class="container-chart">
  <canvas height="0" id="chartLine" />
</div>
