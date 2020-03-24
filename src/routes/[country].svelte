<script context="module">
  import {
    getDataForCountry,
    getCountryTimeline,
    getHistoricProvinceTableData
  } from "../data/request.js";

  export async function preload(page) {
    try {
      const country = page.params["country"];
      const countryInfo = await getDataForCountry(country);
      const historicCountryData = await getCountryTimeline(country);
      const provinces = await getHistoricProvinceTableData(country);
      return {
        countryInfo,
        historicCountryData,
        provinces,
        country
      };
    } catch (e) {
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
    }
    return { country: page.params["country"] };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import _ from "lodash";
  import { filterByName } from "../data/helpers.js";

  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import CovidInfo from "./../components/CovidInfo.svelte";
  import CovidChart from "./../components/CovidChart.svelte";

  export let country;
  export let historicCountryData = {};
  export let countryInfo = {};
  export let provinces = [];

  let pieChart;
  let lineChart;
  let showProvinces = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  let loading = true;
  let unsubscribe;

  const fields = ["Cases", "Deaths", "Recovered"];

  $: showCountry = country.toLowerCase().includes("korea")
    ? "South Korea"
    : country;
  $: showProvinces = filterByName(provinces, search);
  $: if (search.length > 0) {
    page = 0;
  }

  async function changeLocation(event) {
    await goto(country + "/" + event.detail);
  }
</script>

<style>
  h1 {
    margin: 20px 0;
  }
</style>

<svelte:head>
  <title>Covid 19 Tracker For {_.startCase(showCountry)}</title>
</svelte:head>

<div class="ui container">
  <div class="ui breadcrumb">
    <a href="/covid-19-sapper-demo" class="section">Home</a>
    <div class="divider">/</div>
    <div class="active section">{_.startCase(showCountry)}</div>
  </div>
</div>

<div class="ui container">
  <h1>Country {_.startCase(showCountry)}</h1>
</div>

<CovidInfo {...countryInfo} />
<CovidChart
  title="Covid-19 State For {_.startCase(showCountry)}"
  historicData={historicCountryData} />

{#if provinces.length > 0}
  <div class="ui container">
    <h1>Search By Province / State</h1>
  </div>
  <Filter
    geoRegionName="Province / State"
    selectFields={fields}
    bind:sortBy
    bind:search />
  <Table
    geoRegionName="Province / State"
    {fields}
    bind:page
    on:location={changeLocation}
    {sortBy}
    canNav="true"
    list={showProvinces} />
{/if}
