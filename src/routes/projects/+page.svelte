<script lang="ts">
  import { _ } from "svelte-i18n";
  import Separator from "$lib/components/Separator.svelte";
  import Project from "$lib/components/projects/Project.svelte";
  // IMAGES
  import Rubiu5 from "$lib/assets/images/projects/rubiu5.webp";
  import Archan from "$lib/assets/images/projects/archan.webp";
  import StarMC from "$lib/assets/images/projects/starmc.png";
  import DnDAbenyu from "$lib/assets/images/projects/dnd_abenyu.webp";
  import Ryoko from "$lib/assets/images/projects/ryoko.webp";
</script>

<svelte:head>
  <title>{$_("page.projects.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.projects.title")}</h1>

<Separator />

<div class="project-list">
  <Project name={"Rubiu5"} description={"The discord bot for Rubius Army"} img={Rubiu5} />
  <Project name={"Archan"} description={"A complete discord bot featuring a control panel"} img={Archan} />
  <Project name={"StarMC"} description={"Minecraft launcher built on Tauri"} img={StarMC} />
  <Project name={"DnD Abenyu"} description={"A DnD helper server built in Rust"} img={DnDAbenyu} />
  <Project name={"Ryoko"} description={"Social Minecraft plugin similar to Essentials X"} img={Ryoko} />
</div>

<style>
  .project-list {
    display: flex;
    flex-direction: column;
    gap: var(--padding-m);
  }
</style>