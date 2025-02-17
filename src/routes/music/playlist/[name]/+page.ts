import type { PlaylistData, Track } from "$lib/types/spotify.dto";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const playlistData = (await import(
        `$lib/data/json/${params.name}-playlist-info.json`
    ).catch(() => {
        error(404, "Playlist not found.");
    })) as unknown as PlaylistData;
    const playlistTracks = (await import(
        `$lib/data/json/${params.name}-playlist.json`
    ).catch(() => {
        error(404, "Playlist not found.");
    })) as unknown as { tracks: Track[] };

    return {
        playlistData,
        tracks: playlistTracks.tracks,
    };
}
