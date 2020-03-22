<script>
  import { onMount } from "svelte";

  export let cases = 0;
  export let todayCases = 0;
  export let casesPerOneMillion = 0;
  export let recovered = 0;
  export let active = 0;
  export let deaths = 0;
  export let critical = 0;
  export let todayDeaths = 0;
  let pieChart;

  onMount(() => {
    new Chart(pieChart.getContext("2d"), {
      // The type of chart we want to create
      type: "pie",

      // The data for our dataset
      data: {
        labels: ["Deaths", "Recovered", "Active"],
        datasets: [
          {
            data: [deaths, recovered, active],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)"
            ]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  });
</script>

<div class="ui container">
  <div class="ui grid">
    <div class="four wide column">
      <h3>Cases: {cases.toLocaleString()}</h3>
      <h3>Cases Today: {todayCases.toLocaleString()}</h3>
      <h3>Cases Per Million: {casesPerOneMillion.toLocaleString()}</h3>
    </div>
    <div class="four wide column">
      <h3>Recovered: {recovered.toLocaleString()}</h3>
      <h3>Active: {active.toLocaleString()}</h3>
      <h3>Critical: {critical.toLocaleString()}</h3>
    </div>

    <div class="four wide column">
      <h3>Deaths: {deaths.toLocaleString()}</h3>
      <h3>Deaths Today: {todayDeaths.toLocaleString()}</h3>

    </div>

    <div class="four wide column">
      <canvas bind:this={pieChart} />
    </div>
  </div>
</div>
