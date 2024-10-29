<script lang="ts">
	import { _ } from "svelte-i18n";
	import Separator from "$lib/components/Separator.svelte";
	import StoryEntry from "$lib/components/about/StoryEntry.svelte";
	import Flags from "$lib/components/about/Flags.svelte";
	// Images
	import KimuStand from "$lib/images/V4flower.webp";
  import Inventory from "$lib/components/about/Inventory.svelte";

	let selectedProperty: "presentation" | "flags" | "inventory" = "presentation";
</script>

<svelte:head>
	<title>{$_("page.about.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.about.title")} :3</h1>

<Separator />

<div class="about">
	<div class="about-character">
		<div class="about-character-view">
			<img class="about-character-image" src={KimuStand} alt="Character">
			
			<Separator />

			<div class="about-character-info">
				<span class="info-separator"><b>Name</b> <p>:</p> <p>kimu</p></span>
				<span class="info-separator"><b>Level</b> <p>:</p> <p>19</p></span>
				<span class="info-separator"><b>HP</b> <p>:</p> <p>???</p></span>
				<span class="info-separator"><b>Mana</b> <p>:</p> <p>???</p></span>
				<span class="info-separator"><b>Rank</b> <p>:</p> <p>01</p></span>
			</div>
		</div>

		<div class="about-character-selector">
			<button class={`${selectedProperty === "presentation" ? "property-selector-active" : ""} about-character-property`} on:click={() => selectedProperty = "presentation"}>
				<svg class="property-selector" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0h14v2h2v14H0V0zm2 2v12h12V4h-1.998V2H2zm2 6h8v2H4V8zm0-4h6v2H4V4z" fill-rule="evenodd"/>
				</svg>
			</button>

			<button class={`${selectedProperty === "flags" ? "property-selector-active" : ""} about-character-property`} on:click={() => selectedProperty = "flags"}>
				<svg class="property-selector" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 9v7H0V0h16v9H2zm0-7v5h5V2H2zm7 0v5h5V2H9z" fill-rule="evenodd"/>
				</svg>
			</button>

			<button class={`${selectedProperty === "inventory" ? "property-selector-active" : ""} about-character-property`} on:click={() => selectedProperty = "inventory"}>
				<svg class="property-selector" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z" fill-rule="evenodd"/>
				</svg>
			</button>
		</div>
	</div>

	<div class="about-showed-property">
		<h2>{selectedProperty}</h2>
		{#if selectedProperty === "presentation"}
			<p>{@html $_("page.about.presentation")}</p>
		{:else if selectedProperty === "flags"}
			<Flags />
		{:else if selectedProperty === "inventory"}
			<Inventory />
		{/if}
	</div>

</div>

<h3 class="title stories-title">Stories</h3>

<div class="about-stories">
	<StoryEntry title={$_("page.about.story-01")} path="/about/entries/my-story" icon="" num={1} />
	<StoryEntry title="Bla Bla Bla" path="/about/entries/my-story" icon="" num={2} />
	<StoryEntry title="Bla Bla Bla" path="/about/entries/my-story" icon="" num={3} />
	<StoryEntry title="Bla Bla Bla" path="/about/entries/my-story" icon="" num={4} />
	<StoryEntry title="Bla Bla Bla" path="/about/entries/my-story" icon="" num={5} />
	<StoryEntry title="Bla Bla Bla" path="/about/entries/my-story" icon="" num={6} />
</div>

<style>
	/* About info */
	.about {
		display: flex;
		border: var(--border-width) solid var(--color-border);
	}

	.about-character {
		display: flex;
	}

	.about-character-view {
		width: 15rem;
		display: flex;
		flex-direction: column;
		gap: var(--padding-m);
		border: var(--border-width) solid var(--color-border);
		padding: var(--padding-m);
	}

	/* ---- */
	.info-separator {
		display: grid;
		grid-template-columns: 1fr min-content 1fr;
	}
	.info-separator p:last-child {
		text-align: right;
	}

	.about-character-selector {
		width: 2rem;
	}

	.property-selector {
		width: 100%;
		fill: var(--color-fg);
	}
	.property-selector-active {
		background-color: var(--color-fg);
	}
	.property-selector-active svg {
		fill: var(--color-bg);
	}

	.about-character-property {
		border: var(--border-width) solid var(--color-border);
		border-left: none;
		padding: var(--padding-s);
	}.about-character-property:not(:last-child) {
		border-bottom: none;
	}

	/* Showed Property */
	.about-showed-property {
		display: flex;
		flex-direction: column;
		gap: var(--padding-m);
		padding: var(--padding-x);
	}
	.about-showed-property h2 {
		text-transform: capitalize;
	}


	/* Stories */
	.stories-title {
		margin-top: var(--padding-xl);
	}

	.about-stories {
		display: flex;
		flex-direction: column;
		gap: var(--padding-m);
	}
</style>