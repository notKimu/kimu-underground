<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Playlist from "$lib/components/music/Playlist.svelte";
    import "$lib/assets/css/music.css";

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
                <g
                    stroke="var(--color-fg)"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g transform="translate(-179.000000, -569.000000)">
                        <g transform="translate(56.000000, 160.000000)">
                            <polygon points="123 411 144 411 144 409 123 409">
                            </polygon>
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
                <g
                    stroke="var(--color-fg)"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                >
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
                <g
                    stroke="var(--color-fg)"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                >
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
        <div class="playlist-container">
            <Playlist name="kimu" playlistData={data.playlists.kimuPlaylist} />
            <Playlist
                name="lpr-309"
                playlistData={data.playlists.lprPlaylist}
            />
            <Playlist name="mchn" playlistData={data.playlists.mchnPlaylist} />
        </div>
    </div>
</div>

<style>
    .playlist-container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }
</style>
