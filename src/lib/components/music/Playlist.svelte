<script lang="ts">
    import type { PlaylistData } from "$lib/types/spotify.dto";

    const { playlistData, name }: { playlistData: PlaylistData; name: string } =
        $props();
</script>

<a href={`/music/playlist/${name}`} class="playlist-container">
    <div class="playlist-cover">
        <img
            src={playlistData.images[0].url}
            alt=""
            class="playlist-img"
            loading="lazy"
        />
    </div>
    <div class="playlist-data">
        <h1>{playlistData.name}</h1>
        <p>{@html playlistData.description}</p>
    </div>

    <div class="playlist-fill">
        <img src={playlistData.images[0].url} alt="" class="playlist-img" />
    </div>
</a>

<style>
    .playlist-container {
        position: relative;
        height: 7rem;
        display: flex;
        gap: var(--padding-s);
        background-color: var(--color-border);
        padding: var(--padding-s);
        overflow: hidden;
    }

    .playlist-cover {
        height: 100%;
        z-index: 10;
    }
    .playlist-cover img {
        height: 100%;
    }

    .playlist-data {
        z-index: 10;
    }
    .playlist-data * {
        color: var(--color-fg);
    }

    /** HOVER EFFECT */
    .playlist-container:hover .playlist-fill {
        opacity: 0.2;
    }

    .playlist-fill {
        position: absolute;
        height: 100%;
        width: 100%;
        top: -50%;
        left: 0;
        z-index: 9;
        opacity: 0;
        filter: blur(2px);
    }

    .playlist-fill img {
        width: 100%;
    }
</style>
