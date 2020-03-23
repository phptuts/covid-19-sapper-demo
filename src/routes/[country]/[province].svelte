<script context="module">
  export async function preload(page) {
    return {
      country: page.params["country"],
      province: page.params["province"]
    };
  }
</script>

<script>
  import _ from "lodash";
  import { onMount } from "svelte";

  import CovidChart from "../../components/CovidChart.svelte";
  import CovidBasicStats from "./../../components/CovidBasicStats.svelte";
  import { getHistoricTimelineDataForProvince } from "../../data/request.js";
  export let country;
  export let province;

  let timeline = {};
  let loading = true;
  let deaths;
  let recovered;
  let cases;
  onMount(async () => {
    let data = await getHistoricTimelineDataForProvince(country, province);
    ({ timeline, deaths, recovered, cases } = data);
    loading = false;
  });
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

{#if !loading}
  <CovidChart
    title="Covid-19 State for {country} / {province}"
    historicData={timeline} />
{/if}
