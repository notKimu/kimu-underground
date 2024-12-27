<script>
  import { _ } from "svelte-i18n";
  import Separator from "$lib/components/Separator.svelte";
  import Game from "$lib/components/games/Game.svelte";
  //   Images
  import Oneshot from "$lib/assets/images/games/oneshot_game_icon.png";
  import OuterWilds from "$lib/assets/images/games/outer_wilds.png";
  import AHatInTime from "$lib/assets/images/games/a_hat_in_time.png";
  import DarkSouls from "$lib/assets/images/games/dark_souls.png";
  import PokemonBlack from "$lib/assets/images/games/pokemon_black.jpg";
  import Portal2 from "$lib/assets/images/games/portal2.png";
  import RDR2 from "$lib/assets/images/games/rdr2.png";
  import Metaphor from "$lib/assets/images/games/metaphor.png";
  import Minecraft from "$lib/assets/images/games/minecraft.png";
  import Persona5Royal from "$lib/assets/images/games/persona_5_royal.png";
  import GTAIV from "$lib/assets/images/games/gta_iv.png";
  import GTASA from "$lib/assets/images/games/gta_sa.png";
  import CSGO from "$lib/assets/images/games/csgo.png";
  import Portal from "$lib/assets/images/games/portal_logo.png";
  import GTAV from "$lib/assets/images/games/gta_v.png";
  import Skyrim from "$lib/assets/images/games/skyrim.png";
</script>

<svelte:head>
  <title>{$_("page.games.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.games.title")}</h1>

<Separator />

<div class="game-list">
	<Game name={"Oneshot"} img={Oneshot} tier={"s"} />
	<Game name={"Outer Wilds"} img={OuterWilds} tier={"s"} />
	<Game name={"A Hat In Time"} img={AHatInTime} tier={"s"} />
	<Game name={"Dark Souls"} img={DarkSouls} tier={"s"} />
	<Game name={"Pokemon Black"} img={PokemonBlack} tier={"s"} />
	<Game name={"Portal 2"} img={Portal2} tier={"s"} />
	<Game name={"RDR 2"} img={RDR2} tier={"s"} />
	<Game name={"Metaphor: ReFantazio"} img={Metaphor} tier={"s"} />
	<Game name={"Minecraft"} img={Minecraft} tier={"s"} />
	<Game name={"Persona 5 Royal"} img={Persona5Royal} tier={"a"} />
	<Game name={"GTA IV"} img={GTAIV} tier={"a"} />
	<Game name={"GTA SA"} img={GTASA} tier={"a"} />
	<Game name={"CSGO"} img={CSGO} tier={"a"} />
	<Game name={"Portal"} img={Portal} tier={"a"} />
	<Game name={"GTA V"} img={GTAV} tier={"b"} />
	<Game name={"Skyrim"} img={Skyrim} tier={"b"} darkMode={true} />
</div>

<style>
  .game-list {
    display: flex;
    flex-direction: column;
    gap: var(--padding-s);
  }
</style>
