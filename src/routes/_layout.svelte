<script>
  import { goto } from "@sapper/app";
</script>

<style>
  main {
    margin-top: 70px;
  }
</style>

<div class="ui top fixed menu">
  <div class="item">
    <img alt="covid-19 virus logo" src="/covid-19-sapper-demo/logo.jpg" />
  </div>
  <a href="/covid-19-sapper-demo/" rel="prefetch" class="item">Home</a>
  <a href="about" rel="prefetch" pre class="item">About</a>
  <a href="reset" rel="prefetch" pre class="item">Refresh Data</a>
</div>
<main>
  <slot />
</main>
