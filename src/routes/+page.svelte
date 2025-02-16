<script lang="ts">
  import { _ } from "svelte-i18n";
  import WavyText from "$lib/components/WavyText.svelte";
  import Separator from "$lib/components/Separator.svelte";
  import Spells from "$lib/components/index/Spells.svelte";
  import Cards from "$lib/components/index/Cards.svelte";
  // Images
  import KimuGithubImg from "$lib/assets/images/kimu-github.webp?enhanced";
</script>

<svelte:head>
  <title>Kimu's Underground</title>
</svelte:head>

<h1 class="title">
  <WavyText text="Kimu's Underground" />
</h1>

<Separator />

<div class="container">
  <div class="character-container">
    <div class="character-dialog-container">
      <enhanced:img
        class="character-img"
        src={KimuGithubImg}
        alt="Profile of Kimu on Github"
        loading="lazy"
      />

      <div class="character-dialog">
        <!-- Connector for the speech balloon -->
        <svg
          class="character-dialog-connector"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ><path d="M20.697 24L9.303 16.003 20.697 8z" /></svg
        >

        <h3 class="character-dialog-name">Kimu</h3>
        <p>Welcome to my place! =w=</p>
      </div>
    </div>

    <div class="character-spells-container">
      <Spells maxSlots={4} usedSlots={3} level={1} />
      <Spells maxSlots={3} usedSlots={1} level={2} />
      <Spells maxSlots={3} usedSlots={2} level={3} />
    </div>
  </div>

  <p>{@html $_("page.home.body")}</p>

  <div class="vim-title">
    <p>index.md</p>
    <p>1,1</p>
    <p>All</p>
  </div>

  <div class="cards-container">
    <Cards
      icon={""}
      name={"Wishlist"}
      link={"https://skitter-swing-aed.notion.site/Wishlist-14b16e4aa6c68052ae40dca6bac0fbd4"}
    />
    <Cards
      icon={""}
      name={"Game tracker"}
      link={"https://skitter-swing-aed.notion.site/Lista-de-juegos-14e16e4aa6c6801eb595c044fb4edf42"}
    />
    <Cards
      icon={""}
      name={"Read list"}
      link={"https://skitter-swing-aed.notion.site/Lista-de-lectura-14c16e4aa6c680be80d2c02ef31844d6"}
    />
    <Cards icon={""} name={"Donate :3"} link={"https://ko-fi.com/notkimu"} />
    <Cards
      icon={""}
      name={"My Server"}
      link={"https://discord.gg/NfeXrQdXdE"}
    />
    <Cards
      icon={""}
      name={"Youtube"}
      link={"https://www.youtube.com/@kimu_x64"}
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--padding-x);
  }

  /* CHARACTER */
  .character-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--padding-m);
  }

  .character-dialog-container {
    display: grid;
    grid-template-columns: 5rem auto;
    gap: var(--padding-x);
  }

  .character-img {
    width: 100%;
    height: auto;
  }

  .character-dialog {
    position: relative;
    width: fit-content;
    padding: var(--padding-m);
    border: var(--color-border) dashed var(--border-width);
  }

  .character-dialog-connector {
    position: absolute;
    left: -1.1rem;
    height: 1.7rem;
    fill: var(--color-border);
  }

  .character-spells-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: var(--padding-s);
    margin-left: auto;
  }

  /* SOCIALS */
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

  /* CARDS */
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--padding-m);
  }

  @media screen and (max-width: 728px) {
    .character-spells-container {
      width: 100%;
      align-items: unset;
      margin-left: unset;
    }

    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
