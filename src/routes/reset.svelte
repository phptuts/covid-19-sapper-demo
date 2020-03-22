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
    font-size: 20px;
  }
</style>

<svelte:head>
  <title>Reset Cache</title>
</svelte:head>
<div style="display: {showSuccess ? 'block' : 'none'}" class="ui container">

  <div class="ui success message">
    <div class="header">You just refreshed the data.</div>
    <p>Please do this sparingly. Thank you!!!</p>
  </div>
</div>

{#if refreshingCache}
  <div class="ui container">
    <div class="ui active dimmer">
      <div class="ui text loader">Refreshing Data ...</div>
    </div>
  </div>
{/if}

<div class="ui container">
  <p>
    Click this button will refresh the data for this website. It may take a few
    seconds depending on your internet connection.
  </p>
  <button on:click={removeCache} class="ui red basic button">Reset Data</button>
</div>
