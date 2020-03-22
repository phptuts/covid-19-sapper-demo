<script context="module">
  export async function preload(page) {
    return { country: page.params["country"] };
  }
</script>

<script>
  import { onMount } from "svelte";
  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import CovidInfo from "./../components/CovidInfo.svelte";
  import CovidChart from "./../components/CovidChart.svelte";
  import dataStore from "../data/data-store.js";
  import timeline from "../data/timeline.js";
  import { filterByName } from "../data/helpers.js";

  export let country;
  let dataCountryKey = getDataKey(country);
  let pieChart;
  let lineChart;
  let provinces = [];
  let showProvinces = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  let loading = true;
  let historicCountryData = {};
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

  $: showProvinces = filterByName(provinces, search);
  $: if (search.length > 0) {
    page = 0;
  }
  onMount(() => {
    dataStore.subscribe(info => {
      console.log(info);

      if (!info) {
        return;
      }
      provinces = timeline.byProvince(dataCountryKey, info.historicData);
      historicCountryData = timeline.byCountry(info.historicData)[
        dataCountryKey
      ];

      showProvinces = timeline.byProvince(dataCountryKey, info.historicData)[
        dataCountryKey
      ];
      countryInfo = info.dataByCountry.data.find(d => d.location === country);
      loading = false;
    });
  });

  function getDataKey(country) {
    if (country === "UK") {
      return "United Kingdom";
    }

    if (country === "S. Korea") {
      return "Korea, South";
    }
    // Filter out Hong Kong, Diamond Princess, U.S. Virgin Islands, French Guiana

    return country;
  }
</script>

<style>
  h1 {
    margin: 20px 0;
  }
  #note {
    margin-top: 20px;
    font-size: 20px;
  }
</style>

<svelte:head>
  <title>Covid 19 {country}</title>
</svelte:head>
<div class="ui container">
  <h1>Country {country}</h1>

</div>

{#if !loading}
  <CovidInfo {...countryInfo} />
  <div id="note" class="ui container">
    <h2>Important Note</h2>

    <p>
      The information below may not be 100% accurate. It's coming from JHU CSSE
      GISand Data. The goal is to show the how the covid-19 spreads over time
      and what people mean when they talk about the curve. For more information
      please consult the
      <a href="https://github.com/novelcovid/api">api github page.</a>

    </p>
  </div>
  <CovidChart historicData={historicCountryData} />
{/if}

{#if showProvinces.length > 0}
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
    {sortBy}
    list={showProvinces} />
{/if}
