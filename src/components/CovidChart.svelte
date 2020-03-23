<script>
  import { onMount } from "svelte";
  import _ from "lodash";
  import Chart from "chart.js";
  import "moment";
  export let historicData;
  export let title;
  let lineChart;

  let isMount = false;
  let chart;
  $: if (!_.isEmpty(historicData) && isMount) {
    console.log(isMount, "isMounted", historicData);
    createChart();
  }

  const createChart = () => {
    if (chart) {
      chart.destroy();
    }

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
          },

          {
            label: "Recovered",
            data: _.keys(historicData.recovered).map(key => {
              return { x: key, y: historicData.recovered[key] };
            }),
            fill: false,
            borderColor: "rgb(54, 162, 235)"
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
    isMount = true;
  });
</script>

<div class="ui container">
  <canvas bind:this={lineChart} />
</div>
