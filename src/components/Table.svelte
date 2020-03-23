<script>
  import TablePagination from "./TablePagination.svelte";
  import { createEventDispatcher } from "svelte";
  import _ from "lodash";
  export let list = [];
  export let sortBy = "none";
  export let page = 0;
  export let fields;
  export let canNav = false;
  export let geoRegionName = "Country";
  const pageSize = 10;
  const dispatch = createEventDispatcher();

  $: totalPages = Math.ceil(list.length / pageSize);
  $: listShown = list.slice(page * pageSize, page * pageSize + pageSize);
  $: {
    if (sortBy !== "none") {
      listShown = listShown.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }

  function locationChange(location) {
    if (location.toLowerCase().includes("korea")) {
      return "South Korea";
    }
    return location;
  }

  function onSelectedLocation(location) {
    if (canNav) {
      dispatch("location", location);
    }
  }
</script>

<style>
  th {
    transition: font-size 200ms ease-in-out !important;
  }
  .sorting {
    color: brown !important;
    font-size: 1.4em;
  }
  tr.canNav {
    cursor: pointer !important;
  }
</style>

<div class="ui container">
  <table class="ui celled table">
    <thead>
      <tr>
        <th>{geoRegionName}</th>
        {#each fields as field}
          <th class:sorting={sortBy === field.toLowerCase()}>{field}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each listShown as geo (geo.location)}
        <tr class:canNav on:click={onSelectedLocation(geo.location)}>
          <td>{_.startCase(locationChange(geo.location))}</td>

          {#each fields as field}
            <td>{geo[field.toLowerCase()].toLocaleString()}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
    <TablePagination bind:totalPages bind:page />
  </table>
</div>
