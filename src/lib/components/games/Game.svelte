<script lang="ts">
  export let name: string;
  export let img: string;
  export let tier: "s" | "a" | "b";
  export let darkMode = false;
</script>

<div class="game" style={`border-left: .5rem solid var(--tier-${tier});`}>
  <div class="game-info">
    <img class={darkMode ? "invert" : ""} src={img} alt="" />
    <h2>{name}</h2>
  </div>

  <div class="game-tier">
    <h2 class="desktop-only">Tier</h2>
    <h2><span class="tier-letter">{tier}</span></h2>
  </div>
</div>

<style>
  .game {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    padding: var(--padding-s);
		background-color: var(--color-dark);
  }

  .game-info {
    display: flex;
    align-items: center;
    gap: var(--padding-m);
  }
  .game-info img {
    height: 4rem;
  }

  .game-tier {
    display: flex;
    align-items: center;
    gap: var(--padding-s);
  }

	/* TIERS */
  .tier-letter {
    text-transform: capitalize;
  }

  /* INVERT DARK IMAGES ON DARK MODE */
  @media (prefers-color-scheme: dark) {
    .invert {
      filter: invert();
    }
  }
</style>
