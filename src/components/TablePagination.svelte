<script>
  import _ from "lodash";
  export let colSpan = 9;
  export let page = 0;
  export let totalPages = 0;
  $: shownPage = page + 1;
  $: moreThanLastPage = totalPages > 5;
  $: pages = doPaging(shownPage, 5, totalPages, 1);

  function doPaging(
    currentPage,
    maxPagesDisplayed,
    numberOfPages,
    startingPage
  ) {
    // Don't show more than the max number of page
    if (numberOfPages < maxPagesDisplayed) {
      maxPagesDisplayed = numberOfPages;
    }
    // Don't use negative values, force start at 1
    if (currentPage < maxPagesDisplayed / 2 + 1) {
      startingPage = 1;

      // Don't go beyond the last page
    } else if (currentPage >= numberOfPages - maxPagesDisplayed / 2) {
      startingPage = Math.floor(numberOfPages - maxPagesDisplayed + 1);
    } else {
      startingPage = currentPage - Math.floor(maxPagesDisplayed / 2);
    }

    return _.range(startingPage, startingPage + maxPagesDisplayed);
  }

  function changePage(outputPage) {
    page = outputPage - 1;
  }
</script>

<style>
  .disabled,
  .active {
    pointer-events: none;
  }
</style>

<tfoot>
  <tr>
    <th {colSpan}>
      <div class="ui right floated pagination menu">
        <span
          class="icon item"
          class:disabled={shownPage === 1}
          on:click={changePage(shownPage - 1)}>
          <i class="left chevron icon" />
        </span>
        {#each pages as outputPage}
          {#if outputPage === shownPage}
            <i class="item active">{outputPage}</i>
          {:else}
            <i on:click={changePage(outputPage)} class="item">{outputPage}</i>
          {/if}
        {/each}
        <span
          class="icon item"
          class:disabled={shownPage === totalPages}
          on:click={changePage(shownPage + 1)}>
          <i class="right chevron icon" />
        </span>
      </div>
    </th>
  </tr>
</tfoot>
