<script>
  import { _ } from "svelte-i18n";
  import Separator from "$lib/components/Separator.svelte";
  import Game from "$lib/components/games/Game.svelte";
  //   Images
  import Oneshot from "$lib/images/games/oneshot_game_icon.png";
  import OuterWilds from "$lib/images/games/outer_wilds.png";
  import RDR2 from "$lib/images/games/rdr2.png";
  import Minecraft from "$lib/images/games/minecraft.png";
  import Portal from "$lib/images/games/portal_logo.png";
  import Skyrim from "$lib/images/games/skyrim.png";
</script>

<svelte:head>
  <title>My fav games</title>
</svelte:head>

<h1 class="title">{$_("page.games.title")}</h1>

<Separator />

<div class="game-list">
	<Game name={"Oneshot"} img={Oneshot} tier={"s"} />
	<Game name={"Outer Wilds"} img={OuterWilds} tier={"s"} />
	<Game name={"RDR 2"} img={RDR2} tier={"s"} />
	<Game name={"Minecraft"} img={Minecraft} tier={"s"} />
	<Game name={"Portal"} img={Portal} tier={"a"} />
	<Game name={"Skyrim"} img={Skyrim} tier={"b"} darkMode={true} />
</div>

<style>
  .game-list {
    display: flex;
    flex-direction: column;
    gap: var(--padding-s);
  }
</style>
