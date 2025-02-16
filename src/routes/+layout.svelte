<script lang="ts">
  import "$lib/i18n";
  import "../app.css";
  import { onMount } from "svelte";
  import { isLoading, locale } from "svelte-i18n";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  // Images
  import GuraSpinImg from "$lib/assets/images/gawr-spin.gif";

  onMount(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) locale.set(savedLocale);
  });
</script>

<div id="app">
  <div class="polka"></div>

  {#if $isLoading}
    <center class="loading-container">
      <img class="loading-img" src={GuraSpinImg} alt="" loading="lazy" />
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
  .polka {
    height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
    opacity: 0.5;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23422391' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    mask-image: -moz-linear-gradient(180deg, transparent 0%, rgba(0,0,0,1) 100%);
    mask-image: -webkit-linear-gradient(180deg, transparent 0%, rgba(0,0,0,1) 100%);
    mask-image: linear-gradient(180deg, transparent 0%, rgba(0,0,0,1) 100%);
    z-index: -1;
  }

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

  /* LIGHT MODE */
  @media (prefers-color-scheme: light) {
    .polka {
      opacity: .1;
    }
  }
</style>
