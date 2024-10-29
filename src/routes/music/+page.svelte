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
	import Pixelize from "$lib/images/music/pixelize_ii.png";
	import BiscuitFunk from "$lib/images/music/biscuit_funk.jpg";
	import GuruguruHypernova from "$lib/images/music/guruguru_hypernova.png";
	import LagTrain from "$lib/images/music/lag_train.jpg";
	import RainyBoots from "$lib/images/music/rainy_boots.png";
	import Virtual from "$lib/images/music/virtual.webp";
	import Luv from "$lib/images/music/無垢.luv.webp";
	import OtraVezMas from "$lib/images/music/otra-vez-mas.jpg";
	import OnASunnyDay from "$lib/images/music/a-slice-of-life.jpg";
	import WannaGogo from "$lib/images/music/wanna-gogo.jpg";
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
			<MusicTrack cover={PeaceAndTranquility} title="Peace And Tranquility" artist="Pascal Michael Stiefel" link="https://youtu.be/SHvhps47Lmc" /> 
			<MusicTrack cover={ElectroWorld} title="Electro World" artist="Perfume" link="https://youtu.be/8zh0ouiYIZc" /> 
			<MusicTrack cover={Waffle} title="Waffle" artist="Hatsune Miku" link="https://www.youtube.com/watch?v=TlriFxovXJw" /> 
			<MusicTrack cover={LevanPolkka} title="Levan Polkka" artist="Hatsune Miku" link="https://www.youtube.com/watch?v=jrgO_9ey53M" /> 
			<MusicTrack cover={WonderPop} title="WONDER POP" artist="Moe Shop" link="https://www.youtube.com/watch?v=H4PZ7mju5QQ" /> 
			<MusicTrack cover={Pixelize} title="Signal" artist="Moe Shop" link="https://www.youtube.com/watch?v=Q5ThTpqyZDY" /> 
			<MusicTrack cover={BiscuitFunk} title="Biscuit Funk" artist="Moe Shop" link="https://www.youtube.com/watch?v=BQWyYnf3X2g" /> 
			<MusicTrack cover={GuruguruHypernova} title="Hypernova Disco" artist="Moe Shop" link="https://www.youtube.com/watch?v=423VJ1mMbYA" /> 
			<MusicTrack cover={GuruguruHypernova} title="GURUGURU" artist="Moe Shop" link="https://www.youtube.com/watch?v=wkVzYnFzGPo" /> 
			<MusicTrack cover={LagTrain} title="Lag Train" artist="Inabakumori" link="https://www.youtube.com/watch?v=UnIhRpIT7nc" /> 
			<MusicTrack cover={RainyBoots} title="Rainy Boots" artist="Inabakumori" link="https://www.youtube.com/watch?v=G5hScSFkib4" /> 
			<MusicTrack cover={Virtual} title="Virtual" artist="Geoxor" link="https://www.youtube.com/watch?v=oklzVH8FfVQ" /> 
			<MusicTrack cover={Luv} title="無垢.luv" artist="Motto" link="https://www.youtube.com/watch?v=fjJlhC_B_fg" /> 
			<MusicTrack cover={OtraVezMas} title="Otra vez más" artist="Xenia" link="https://youtu.be/T9TdpTTu2RM?list=PLXLK2Z9y3jaFmn7luA3jXvUFfszO6yRbN" /> 
			<MusicTrack cover={OnASunnyDay} title="on a sunny day" artist="Deathbrain" link="https://youtu.be/aIzkN_zBVjI?list=OLAK5uy_k1bbaI3aI9a6abl25fyx7Ws-gW7VFcApA" /> 
			<MusicTrack cover={WannaGogo} title="wanna gogo" artist="Deathbrain" link="https://youtube.com/playlist?list=OLAK5uy_lHCd_tHldiVNJAaRAodIMrM8JHdEZ4BYA" /> 
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