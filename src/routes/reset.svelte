<script>
  import { deleteCacheKeys } from "../data/cache.js";
  let showSuccess = false;

  function deleteCache() {
    deleteCacheKeys();
    showSuccess = true;
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

<div class="ui container">
  <p>
    Click this button will refresh the data for this website. When you go to the
    home page it might take a few seconds to load.
  </p>
  <button on:click={deleteCache} class="ui red basic button">
    Refresh Data
  </button>
</div>
