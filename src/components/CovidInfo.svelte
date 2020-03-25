<script>
  import { onMount } from "svelte";

  import Chart from "chart.js";

  export let cases = 0;
  export let todayCases = 0;
  export let casesPerOneMillion = 0;
  export let deathsPerMillion = 0;
  export let recovered = 0;
  export let active = 0;
  export let deaths = 0;
  export let critical = 0;
  export let todayDeaths = 0;
  let pieChart;
</script>

<style>
  div.column {
    font-size: 1.1em;
    font-weight: bold;
  }
</style>

<div class="ui container">
  <div class="ui stackable three column grid">
    <div class="column">Cases: {cases.toLocaleString()}</div>
    <div class="column">Cases Today: {todayCases.toLocaleString()}</div>
    <div class="column">
      Cases Per Million: {casesPerOneMillion.toLocaleString()}
    </div>
  </div>
  <div class="ui stackable three column grid">
    <div class="column ">Deaths: {deaths.toLocaleString()}</div>
    <div class="column ">Deaths Today: {todayDeaths.toLocaleString()}</div>
    <div class="column">
      Deaths Per Million: {deathsPerMillion.toLocaleString()}
    </div>
  </div>
  <div class="ui stackable three column grid">
    <div class="column">Active: {active.toLocaleString()}</div>
    <div class="column">Critical: {critical.toLocaleString()}</div>
    <div class="column">Recovered: {recovered.toLocaleString()}</div>

  </div>

</div>
