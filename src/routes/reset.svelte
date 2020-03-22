<script>
  import { deleteCache } from "../data/data-store.js";
  let showSuccess = false;
  let refreshingCache = false;
  import dataStore from "../data/data-store.js";

  dataStore.subscribe(() => {
    if (refreshingCache) {
      refreshingCache = false;
      showSuccess = true;
    }
  });
  function removeCache() {
    deleteCache();
    refreshingCache = true;
  }
</script>

<style>
  .container {
    margin-bottom: 20px;
  }
</style>

<svelte:head>
  <title>Reset Cache</title>
</svelte:head>
<div style="display: {showSuccess ? 'block' : 'none'}" class="ui container">

  <div class="ui success message">
    <div class="header">You just deleeted cache.</div>
    <p>When you navigate to the home screen it should take a little longer.</p>
  </div>
</div>

{#if refreshingCache}
  <div class="ui container">
    <h1>Covid-19 Tracker</h1>
    <div class="ui active dimmer">
      <div class="ui text loader">Refreshing Data ...</div>
    </div>
  </div>
{/if}

<div class="ui container">
  <button on:click={removeCache} class="ui red basic button">Reset Data</button>
</div>
