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
    <img alt="covid-19 virus logo" src="/logo.jpg" />
  </div>
  <a href="/" rel="prefetch" class="item">Home</a>
  <a href="/about" rel="prefetch" pre class="item">About</a>
</div>
<main>
  <slot />
</main>
