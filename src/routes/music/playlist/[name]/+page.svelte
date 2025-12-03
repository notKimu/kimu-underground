<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import MusicTrack from "$lib/components/music/MusicTrack.svelte";
    import "$lib/assets/css/music.css";
    import Window from "$lib/components/Window.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <title>{$_("page.music.page-title")}</title>
</svelte:head>

<h1 class="title">Playlist | {data.playlistData.name}</h1>

<Separator />

<div class="playlist-info">
    <h3>Tracks: {data.tracks.length}</h3>
    <a href={data.playlistData.external_urls.spotify}><h3>Link</h3></a>
</div>

<Window title={`~/iPod/${data.playlistData.name}`}>
    <div class="track-container">
        {#each data.tracks as trackInfo}
            <MusicTrack
                title={trackInfo.track.name}
                artist={trackInfo.track.artists[0].name}
                cover={trackInfo.track.album.images[0].url}
                link={trackInfo.track.external_urls.spotify}
            />
        {/each}
    </div>
</Window>

<style>
    .track-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--padding-m);
    }
</style>
