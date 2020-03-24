<script context="module">
  import { getWorldData, getDataForCountries } from "../data/request.js";

  export async function preload(page) {
    try {
      const countries = await getDataForCountries();
      const worldStats = await getWorldData();
      return { countries, worldStats };
    } catch (e) {
      this.error(
        500,
        "There was an error in calling the api, please try again in 5 minutes."
      );
    }
  }
</script>

<script>
  import Table from "../components/Table.svelte";
  import Filter from "./../components/Filter.svelte";
  import CovidBasicStats from "./../components/CovidBasicStats.svelte";

  import { filterByName } from "../data/helpers.js";
  import _ from "lodash";
  import { goto } from "@sapper/app";

  const fields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  const selectFields = ["Cases", "Deaths", "Recovered", "Active", "Critical"];

  export let worldStats = { cases: 0, deaths: 0, recovered: 0 };
  export let countries = [];
  let showCountries = [];
  let sortBy = "none";
  let search = "";
  let page = 0;
  $: showCountries = filterByName(countries, search);
  $: if (search.length > 0) {
    page = 0;
  }

  async function changeLocation(event) {
    await goto(event.detail);
  }
</script>

<style>
  h1 {
    margin: 20px 0;
  }
  .container {
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>Covid-19 Tracker</title>
</svelte:head>

<div class="ui container">
  <h1>Covid-19 Tracker</h1>
  <CovidBasicStats
    deaths={worldStats.deaths}
    recovered={worldStats.recovered}
    cases={worldStats.cases} />
</div>
<div class="ui container">
  <h2>Search By Country</h2>
</div>
<Filter {selectFields} bind:sortBy bind:search />
<Table
  on:location={changeLocation}
  {fields}
  {sortBy}
  bind:page
  canNav="true"
  list={showCountries} />
