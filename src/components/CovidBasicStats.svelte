<script>
  export let cases;
  export let deaths;
  export let recovered;
</script>

{#if cases !== undefined}
  <div class="ui stackable three column grid">
    <div class="column">
      <h3>Cases: {(+cases).toLocaleString()}</h3>
    </div>
    <div class="column">
      <h3>Deaths: {(+deaths).toLocaleString()}</h3>
    </div>
    <div class="column">
      <h3>Recovered: {(+recovered).toLocaleString()}</h3>
    </div>
  </div>
{/if}
