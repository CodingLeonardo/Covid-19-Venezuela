<script>
  import { afterUpdate } from "svelte";
  import Chart from "chart.js";

  export let data;
  export let title;

  let ctx;
  let chart;

  function totalCasesChart() {
    if (!data.Confirmed || !data.Recovered || !data.Deaths) {
      return;
    } else {
      ctx = document.getElementById("chartPie");
      chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Confirmados", "Recuperados", "Muertes"],
          datasets: [
            {
              backgroundColor: ["#E8BF13", "#01113E", "#A4061C"],
              borderColor: ["#E8BF13", "#01113E", "#A4061C"],
              data: [
                data.Confirmed.Count,
                data.Recovered.Count,
                data.Deaths.Count
              ]
            }
          ]
        },
        options: {
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
            bodySpacing: 10
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
</style>

<div class="container-chart">
  <canvas height="0" id="chartPie" />
</div>
