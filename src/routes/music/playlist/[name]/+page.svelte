<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import MusicTrack from "$lib/components/music/MusicTrack.svelte";
  
    export let data;
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
  
  <div class="window-container">
    <div class="window-titlebar">
      <p>~/iPod</p>
      <div class="window-titlebar-icon-container">
        <svg
          class="window-titlebar-icon"
          viewBox="0 -9.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="var(--color-bg)" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-179.000000, -569.000000)">
              <g transform="translate(56.000000, 160.000000)">
                <polygon points="123 411 144 411 144 409 123 409"> </polygon>
              </g>
            </g>
          </g>
        </svg>
  
        <svg
          class="window-titlebar-icon"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="var(--color-bg)" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-300.000000, -4199.000000)">
              <g transform="translate(56.000000, 160.000000)">
                <path
                  d="M262.4445,4039 L256.0005,4039 L256.0005,4041 L262.0005,4041 L262.0005,4047 L264.0005,4047 L264.0005,4039.955 L264.0005,4039 L262.4445,4039 Z M262.0005,4057 L256.0005,4057 L256.0005,4059 L262.4445,4059 L264.0005,4059 L264.0005,4055.955 L264.0005,4051 L262.0005,4051 L262.0005,4057 Z M246.0005,4051 L244.0005,4051 L244.0005,4055.955 L244.0005,4059 L246.4445,4059 L252.0005,4059 L252.0005,4057 L246.0005,4057 L246.0005,4051 Z M246.0005,4047 L244.0005,4047 L244.0005,4039.955 L244.0005,4039 L246.4445,4039 L252.0005,4039 L252.0005,4041 L246.0005,4041 L246.0005,4047 Z"
                >
                </path>
              </g>
            </g>
          </g>
        </svg>
  
        <svg
          class="window-titlebar-icon"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="var(--color-bg)" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-419.000000, -240.000000)">
              <g transform="translate(56.000000, 160.000000)">
                <polygon
                  points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  
    <div class="window-content">
      <div class="track-container">
        {#each data.tracks as trackInfo}
          <MusicTrack title={trackInfo.track.name} artist={trackInfo.track.artists[0].name} cover={trackInfo.track.album.images[0].url} link={trackInfo.track.external_urls.spotify} />
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .playlist-info {
      display: flex;
      justify-content: space-between;
      gap: var(--padding-m);
    }
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
  
    .window-titlebar-icon-container {
      display: flex;
      align-items: center;
      gap: var(--padding-s);
    }
  
    .window-titlebar-icon {
      height: 0.6em;
    }
    .window-titlebar-icon * {
      fill: var(--color-bg);
    }
  
    .window-content {
      border: var(--border-width) solid var(--color-fg);
      border-top: none;
      padding: var(--padding-m);
    }
  
    .track-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--padding-m);
    }
  </style>
  