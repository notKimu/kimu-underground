<script lang="ts">
  import { _ } from "svelte-i18n";
  import WavyText from "$lib/components/WavyText.svelte";
  import Separator from "$lib/components/Separator.svelte";
</script>

<svelte:head>
  <title>Kimu's Underground</title>
</svelte:head>

<h1 class="title">
  <WavyText text="Kimu's Underground" />
</h1>

<Separator />

<div class="text-container">
  <p>{@html $_("page.home.body")}</p>
  
  <div class="vim-title">
    <p>index.md</p>
    <p>1,1</p>
    <p>All</p>
  </div>
</div>

<h4>Socials</h4>

<style>
  .text-container {
    display: flex;
    flex-direction: column;
    gap: var(--padding-x);
  }

  .vim-title {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 15% min-content;
    background-color: var(--color-fg);
  }
  .vim-title p {
    color: var(--color-bg);
    padding: 0 var(--padding-s);
  }
</style>
