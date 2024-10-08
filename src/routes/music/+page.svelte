<script lang="ts">
	import { _ } from "svelte-i18n";
	import MusicTrack from "$lib/components/music/MusicTrack.svelte";
	import Separator from "$lib/components/Separator.svelte";
	// Images
	import PeaceAndTranquility from "$lib/images/music/peace_and_tranquility.jpg";
	import ElectroWorld from "$lib/images/music/electro_world.webp";
	import Waffle from "$lib/images/music/miku_waffle.webp";
	import LevanPolkka from "$lib/images/music/levan_polkka.png";
	import WonderPop from "$lib/images/music/wonder_pop.jpg";
	import LagTrain from "$lib/images/music/lag_train.jpg";
	import RainyBoots from "$lib/images/music/rainy_boots.png";
	import Virtual from "$lib/images/music/virtual.webp";
</script>

<svelte:head>
	<title>{$_("page.music.page-title")}</title>
</svelte:head>

<h1 class="title">{$_("page.music.title")}</h1>

<Separator />

<div class="window-container">
	<div class="window-titlebar">
		<p>~/iPod</p>
		<div class="window-titlebar-icons">
			<p>🗕</p>
			<p>⏹</p>
			<p>⏺</p>
		</div>
	</div>

	<div class="window-content">
		<div class="album-container">
			<MusicTrack cover={PeaceAndTranquility} title="Peace And Tranquility" artist="Pascal Michael Stiefel" /> 
			<MusicTrack cover={ElectroWorld} title="Electro World" artist="Perfume" /> 
			<MusicTrack cover={Waffle} title="Waffle" artist="Hatsune Miku" link="https://www.youtube.com/watch?v=TlriFxovXJw" /> 
			<MusicTrack cover={LevanPolkka} title="Levan Polkka" artist="Hatsune Miku" link="https://www.youtube.com/watch?v=jrgO_9ey53M" /> 
			<MusicTrack cover={WonderPop} title="WONDER POP" artist="Moe Shop" link="https://www.youtube.com/watch?v=H4PZ7mju5QQ" /> 
			<MusicTrack cover={LagTrain} title="Lag Train" artist="Inabakumori" link="https://www.youtube.com/watch?v=UnIhRpIT7nc" /> 
			<MusicTrack cover={RainyBoots} title="Rainy Boots" artist="Inabakumori" link="https://www.youtube.com/watch?v=G5hScSFkib4" /> 
			<MusicTrack cover={Virtual} title="Virtual" artist="Geoxor" link="https://www.youtube.com/watch?v=oklzVH8FfVQ" /> 
		</div>
	</div>
</div>

<style>
	.window-container {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.window-titlebar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-fg);
		padding: 0 var(--padding-s);
	}
	.window-titlebar * {
		color: var(--color-bg);
	}

	.window-titlebar-icons {
		display: flex;
		align-items: center;
		gap: var(--padding-s);
	}

	.window-content {
		border: var(--border-width) solid var(--color-fg);
		border-top: none;
		padding: var(--padding-m);
	}

	.album-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: var(--padding-x);
    }
</style>