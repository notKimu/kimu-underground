<script lang="ts">
	import { _ } from "svelte-i18n";
	import Separator from "$lib/components/Separator.svelte";
	import StoryEntry from "$lib/components/about/StoryEntry.svelte";
	// Images
	import KimuDiscordPfp from "$lib/images/kimu_discord.webp";
	import TransFlag from "$lib/images/trans_flag.webp";
	import DemiFlag from "$lib/images/demi_flag.webp";
	import AutisticCreature from "$lib/images/autistic_creature.webp";
</script>

<svelte:head>
	<title>{$_("page.about.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.about.title")} :3</h1>

<Separator />

<div class="about-card">
	<img class="about-card-image" src={KimuDiscordPfp} alt="Kimu's discord profile">

	<div class="about-card-text">
		<h1>Kimu</h1>
		<p>{@html $_("page.about.presentation")}</p>
	</div>

	<div class="about-card-flags">
		<div class="about-card-flags-img tooltip">
			<img src={TransFlag} alt="">
			<p class="tooltip-text">Transgender</p>
		</div>
		<div class="about-card-flags-img tooltip">
			<p class="tooltip-text">Demisexual</p>
			<img src={DemiFlag} alt="">
		</div>
		<div class="about-card-flags-img tooltip">
			<p class="tooltip-text">Yipeee</p>
			<img src={AutisticCreature} alt="">
		</div>
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
	.about-card {
		display: grid;
		grid-template-columns: clamp(4rem, 15vw, 20rem) 1fr 4rem;
		gap: var(--padding-x);
		border: var(--border-width) solid var(--color-border);
		padding: var(--padding-m);
	}

	.about-card-image {
		position: relative;
		width: clamp(4rem, 15vw, 20rem);
		height: clamp(4rem, 15vw, 20rem);
	}

	.about-card-text {
		display: flex;
		flex-direction: column;
		gap: var(--padding-s);
	}

	.about-card-flags {
		width: 50px;
		display: flex;
		flex-direction: column;
		gap: var(--padding-m);
		border-left: var(--border-width) solid var(--color-border);
        margin-left: auto;
		padding-left: var(--padding-m);
	}

	.about-card-flags-img img{
		width: 100%;
	}

	.stories-title {
		margin-top: var(--padding-xl);
	}

	.about-stories {
		display: flex;
		flex-direction: column;
		gap: var(--padding-m);
	}
</style>