<script>
  import { onDestroy, onMount } from "svelte";
  import _ from "lodash";
  import Chart from "chart.js";
  import "moment";
  export let historicData;
  export let title;
  let lineChart;
  let hideChart = false;
  let noHistoricData = false;
  let isMount = false;
  let chart;

  const createChart = () => {
    chart = new Chart(lineChart.getContext("2d"), {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        datasets: [
          {
            label: "Cases",
            data: _.keys(historicData.cases).map(key => {
              return { x: key, y: historicData.cases[key] };
            }),
            fill: false,
            borderColor: "rgb(100, 0, 200)"
          },
          {
            label: "Deaths",
            data: _.keys(historicData.deaths).map(key => {
              return { x: key, y: historicData.deaths[key] };
            }),
            fill: false,
            borderColor: "rgb(255, 99, 132)"
          }
        ]
      },

      // Configuration options go here
      options: {
        responsive: true,
        title: {
          display: true,
          text: title
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                parser: "M/D/YY",
                tooltipFormat: "ll"
              },
              scaleLabel: {
                display: true,
                labelString: "Date"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Total Cases / Recovered / Deaths Reported"
              }
            }
          ]
        }
      }
    });
  };

  onMount(() => {
    console.log(!_.isEmpty(historicData.cases));
    if (
      !_.isEmpty(historicData) &&
      !_.isEmpty(historicData.cases) &&
      document.body.clientWidth > 680
    ) {
      createChart();
      return;
    }

    if (_.isEmpty(historicData.cases)) {
      noHistoricData = true;
    }

    hideChart = true;
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<style>
  .ui.container {
    text-align: center;
    margin-top: 60px;
  }
</style>

{#if !hideChart}
  <div class="ui container">
    <canvas bind:this={lineChart} />
  </div>
{/if}

{#if noHistoricData}
  <div class="ui container">
    <h2>No historic data is available at this time.</h2>
  </div>
{/if}
