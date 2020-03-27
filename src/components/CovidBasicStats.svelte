<script>
  import moment from "moment";

  export let cases;
  export let deaths;
  export let recovered;
  export let updated;
</script>

{#if cases !== undefined}
  <div class="ui stackable four column grid">
    <div class="column">
      <h3>Cases: {(+cases).toLocaleString()}</h3>
    </div>
    <div class="column">
      <h3>Deaths: {(+deaths).toLocaleString()}</h3>
    </div>
    <div class="column">
      <h3>Recovered: {(+recovered).toLocaleString()}</h3>
    </div>
    <div class="column">
      <h3>Updated: {moment(updated).format('h:mm:ss A')}</h3>
    </div>
  </div>
{/if}
