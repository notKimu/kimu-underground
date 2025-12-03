<script>
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Game from "$lib/components/games/Game.svelte";
    // Images
    import OneshotImg from "$lib/assets/images/games/oneshot_game_icon.webp?enhanced";
    import OuterWildsImg from "$lib/assets/images/games/outer_wilds.webp?enhanced";
    import AHatInTimeImg from "$lib/assets/images/games/a_hat_in_time.webp?enhanced";
	import Yakuza0Img from "$lib/assets/images/games/yakuza0.webp?enhanced";
	import Persona4Golden from "$lib/assets/images/games/p4g.webp?enhanced";
	import CultOfTheLamb from "$lib/assets/images/games/cult_of_the_lamb.webp?enhanced";
	import KlonoaImg from "$lib/assets/images/games/klonoa.webp?enhanced";
    import DarkSoulsImg from "$lib/assets/images/games/dark_souls.webp?enhanced";
    import Portal2Img from "$lib/assets/images/games/portal2.webp?enhanced";
    import RDR2Img from "$lib/assets/images/games/rdr2.webp?enhanced";
    import GTASAImg from "$lib/assets/images/games/gta_sa.webp?enhanced";
    import DiabloImg from "$lib/assets/images/games/diablo.webp?enhanced";
    import MetaphorImg from "$lib/assets/images/games/metaphor.webp?enhanced";
    import MinecraftImg from "$lib/assets/images/games/minecraft.webp?enhanced";
    import Persona5RoyalImg from "$lib/assets/images/games/persona_5_royal.webp?enhanced";
    import PokemonBlackImg from "$lib/assets/images/games/pokemon_black.jpg?enhanced";
    import GTAIVImg from "$lib/assets/images/games/gta_iv.webp?enhanced";
    import CSGOImg from "$lib/assets/images/games/csgo.webp?enhanced";
    import PortalImg from "$lib/assets/images/games/portal_logo.webp?enhanced";
    import GTAVImg from "$lib/assets/images/games/gta_v.webp?enhanced";
    import SkyrimImg from "$lib/assets/images/games/skyrim.webp?enhanced";
</script>

<svelte:head>
    <title>{$_("page.games.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.games.title")}</h1>

<Separator />

<div class="game-list">
    <Game name={"Oneshot"} img={OneshotImg} tier={"s"} />
    <Game name={"Outer Wilds"} img={OuterWildsImg} tier={"s"} />
    <Game name={"A Hat In Time"} img={AHatInTimeImg} tier={"s"} />
    <Game name={"Yakuza 0"} img={Yakuza0Img} tier={"s"} />
    <Game name={"Persona 4 Golden"} img={Persona4Golden} tier={"s"} />
    <Game name={"Cult of the Lamb"} img={CultOfTheLamb} tier={"s"} />
    <Game name={"Klonoa"} img={KlonoaImg} tier={"s"} />
    <Game name={"Dark Souls"} img={DarkSoulsImg} tier={"s"} />
    <Game name={"Portal 2"} img={Portal2Img} tier={"s"} />
    <Game name={"RDR 2"} img={RDR2Img} tier={"s"} />
    <Game name={"GTA SA"} img={GTASAImg} tier={"s"} />
    <Game name={"Diablo"} img={DiabloImg} tier={"s"} />
    <Game name={"Metaphor: ReFantazio"} img={MetaphorImg} tier={"s"} />
    <Game name={"Minecraft"} img={MinecraftImg} tier={"s"} />
    <Game name={"Persona 5 Royal"} img={Persona5RoyalImg} tier={"a"} />
    <Game name={"Pokemon Black"} img={PokemonBlackImg} tier={"a"} />
    <Game name={"GTA IV"} img={GTAIVImg} tier={"a"} />
    <Game name={"CSGO"} img={CSGOImg} tier={"a"} />
    <Game name={"Portal"} img={PortalImg} tier={"a"} />
    <Game name={"GTA V"} img={GTAVImg} tier={"b"} />
    <Game name={"Skyrim"} img={SkyrimImg} tier={"b"} />
</div>

<style>
    .game-list {
        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
    }
</style>
