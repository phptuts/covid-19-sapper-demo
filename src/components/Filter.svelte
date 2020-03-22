<script>
  export let sortBy = "none";
  export let search = "";
  export let geoRegionName = "Country";
  export let selectFields;
</script>

<div class="ui container">
  <form class="ui form">
    <div class="two fields">
      <div class="field">
        <label>{geoRegionName}</label>
        <input
          bind:value={search}
          type="text"
          placeholder="Enter {geoRegionName}" />
      </div>
      <div class="field">
        <label>Sort By</label>
        <select bind:value={sortBy} class="ui dropdown">
          <option value="none">None</option>

          {#each selectFields as field}
            <option value={field.toLowerCase()}>{field}</option>
          {/each}
        </select>
      </div>
    </div>
  </form>
</div>
