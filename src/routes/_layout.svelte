<script>
  import { goto } from "@sapper/app";
  function navigateHome() {
    goto("/covid-19-sapper-demo");
  }
</script>

<style>
  main {
    margin-top: 70px;
  }
  span.item,
  img.click {
    cursor: pointer;
  }
</style>

<div class="ui top fixed menu">
  <div class="item">
    <img
      class="click"
      on:click={navigateHome}
      alt="covid-19 virus logo"
      src="/covid-19-sapper-demo/logo.jpg" />
  </div>
  <span on:click={navigateHome} class="item">Home</span>
  <a href="about" rel="prefetch" pre class="item">About</a>
  <a href="reset" rel="prefetch" pre class="item">Refresh Data</a>
</div>
<main>
  <slot />
</main>
