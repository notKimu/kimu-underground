<script lang="ts">
  import "$lib/i18n";
  import { onMount } from "svelte";
  import { isLoading, locale } from "svelte-i18n";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "../app.css";
  import "../tooltip.css";
  // Images
  import GuraSpin from "$lib/images/gawr-spin.gif";

  onMount(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) locale.set(savedLocale);
  });
</script>

<div id="app">
  <div class="scanlines"></div>

  {#if $isLoading}
    <center class="loading-container">
      <img class="loading-img" src={GuraSpin} alt="" />
      <h1>...</h1>
    </center>
  {:else}
    <Header />
    <Sidebar />
    <main>
      <slot />
    </main>
  {/if}
</div>

<style>
  /* Makes hard reading the stories */
  /* .scanlines {
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		background: repeating-linear-gradient(#00000000, #00000000 7px, #0000003e 7px, #0000003e 8px);
		z-index: 1000;
	} */

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .loading-container {
    margin-top: 30vh;
  }

  .loading-img {
    width: clamp(7rem, 10vw, 15%);
  }
</style>
