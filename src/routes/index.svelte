<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  onMount(async () => {
    await goto("home");
  });
</script>

<div class="ui container">

  <h1>Redirecting you to the home screen.</h1>
</div>
