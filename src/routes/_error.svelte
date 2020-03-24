<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>Covid 19 Error Page</title>
</svelte:head>

<div class="ui container">
  <h1>Covid-19 Tracker Error</h1>

  <div class="ui error message">
    <div class="header">There was error.</div>
    <p>{error.message}</p>
  </div>
</div>
