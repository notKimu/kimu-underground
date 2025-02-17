<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Project from "$lib/components/projects/Project.svelte";
    // Images
    import Rubiu5Img from "$lib/assets/images/projects/rubiu5.webp?enhanced";
    import ArchanImg from "$lib/assets/images/projects/archan.webp?enhanced";
    import StarMCImg from "$lib/assets/images/projects/starmc.webp?enhanced";
    import DnDAbenyuImg from "$lib/assets/images/projects/dnd_abenyu.webp?enhanced";
    import RyokoImg from "$lib/assets/images/projects/ryoko.webp?enhanced";
</script>

<svelte:head>
    <title>{$_("page.projects.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.projects.title")}</h1>

<Separator />

<div class="project-list">
    <Project
        name={"Rubiu5"}
        description={"The discord bot for Rubius Army"}
        img={Rubiu5Img}
        tags={["TypeScript", "Docker", "MongoDB"]}
    />
    <Project
        name={"Archan"}
        description={"A fast and configurable discord bot"}
        img={ArchanImg}
        tags={["TypeScript", "Docker", "Redis"]}
    />
    <Project
        name={"StarMC"}
        description={"Minecraft launcher built on Tauri"}
        img={StarMCImg}
        tags={["Rust", "React"]}
    />
    <Project
        name={"DnD Abenyu"}
        description={"A DnD helper server built in Rust"}
        img={DnDAbenyuImg}
        tags={["Rust", "Svelte", "SQLite"]}
    />
    <Project
        name={"Ryoko"}
        description={"Social Minecraft plugin similar to Essentials X"}
        img={RyokoImg}
        tags={["Java", "Kotlin"]}
    />
</div>

<style>
    .project-list {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }
</style>
