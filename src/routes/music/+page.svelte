<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Playlist from "$lib/components/music/Playlist.svelte";
    import "$lib/assets/css/music.css";
    import Window from "$lib/components/Window.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>{$_("page.music.page-title")}</title>
</svelte:head>

<h1 class="title">{$_("page.music.title")}</h1>

<Separator />

<div class="playlist-info">
    <h3>Playlists: 3</h3>
    <a href="https://open.spotify.com/user/7ffa70unfgny74s5yj5f6um59">
        <h3>Profile</h3>
    </a>
</div>

<Window title="~/iPod">
    <div class="playlist-container">
        <Playlist name="kimu" playlistData={data.playlists.kimuPlaylist} />
        <Playlist name="lpr-309" playlistData={data.playlists.lprPlaylist} />
        <Playlist name="mchn" playlistData={data.playlists.mchnPlaylist} />
    </div>
</Window>

<style>
    .playlist-container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }
</style>
