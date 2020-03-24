<script context="module">
  import { getHistoricTimelineDataForProvince } from "../../data/request.js";

  export async function preload(page) {
    try {
      const {
        timeline,
        deaths,
        recovered,
        cases
      } = await getHistoricTimelineDataForProvince(
        page.params["country"],
        page.params["province"]
      );

      return {
        timeline,
        deaths,
        recovered,
        cases,
        country: page.params["country"],
        province: page.params["province"]
      };
    } catch (e) {
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
    }
  }
</script>

<script>
  import _ from "lodash";

  import CovidChart from "../../components/CovidChart.svelte";
  import CovidBasicStats from "./../../components/CovidBasicStats.svelte";
  export let country;
  export let province;

  export let timeline = {};
  export let deaths;
  export let recovered;
  export let cases;
</script>

<style>
  .container {
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>Covid 19 Tracker For {country} / {province}</title>
</svelte:head>

<div class="ui container">
  <div class="ui breadcrumb">
    <a href="/covid-19-sapper-demo" class="section">Home</a>
    <div class="divider">/</div>
    <a href={country} class="section">{_.startCase(country)}</a>
    <div class="divider">/</div>
    <div class="active section">{_.startCase(province)}</div>
  </div>
</div>
<div class="ui container">
  <h1>Location {country} / {province}</h1>
  {#if cases}
    <CovidBasicStats {deaths} {recovered} {cases} />
  {/if}
</div>

<CovidChart
  title="Covid-19 State for {country} / {province}"
  historicData={timeline} />
