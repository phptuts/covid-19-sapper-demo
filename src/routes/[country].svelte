<script context="module">
  export async function preload(page) {
    return { country: page.params["country"] };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import _ from "lodash";
  import { filterByName } from "../data/helpers.js";

  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import CovidInfo from "./../components/CovidInfo.svelte";
  import CovidChart from "./../components/CovidChart.svelte";

  import {
    getDataForCountry,
    getCountryTimeline,
    getHistoricProvinceTableData
  } from "../data/request.js";

  export let country;
  let pieChart;
  let lineChart;
  let provinces = [];
  let showProvinces = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  let loading = true;
  let historicCountryData = {};
  let unsubscribe;

  const fields = ["Cases", "Deaths", "Recovered"];
  let countryInfo = {
    deaths: 0,
    active: 0,
    recovered: 0,
    cases: 0,
    casesPerOneMillion: 0,
    todayDeaths: 0,
    todayCases: 0
  };

  $: showCountry = country.toLowerCase().includes("korea")
    ? "South Korea"
    : country;
  $: showProvinces = filterByName(provinces, search);
  $: if (search.length > 0) {
    page = 0;
  }
  onMount(async () => {
    countryInfo = await getDataForCountry(country);
    historicCountryData = await getCountryTimeline(country);
    provinces = await getHistoricProvinceTableData(country);
    loading = false;
  });

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

{#if !loading}
  <CovidInfo {...countryInfo} />
  <CovidChart
    title="Covid-19 State For {_.startCase(showCountry)}"
    historicData={historicCountryData} />
{/if}

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
