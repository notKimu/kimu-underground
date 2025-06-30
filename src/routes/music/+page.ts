import type { PlaylistData } from "$lib/types/spotify.dto";
import { error } from "@sveltejs/kit";

const ERROR_MSG = "That playlist is not playing now...";

export async function load() {
    const kimuPlaylist = (await import(
        `$lib/data/json/kimu-playlist-info.json`
    ).catch(() => {
        error(404, ERROR_MSG);
    })) as unknown as PlaylistData;
    const lprPlaylist = (await import(
        `$lib/data/json/lpr-309-playlist-info.json`
    ).catch(() => {
        error(404, ERROR_MSG);
    })) as unknown as PlaylistData;
    const mchnPlaylist = (await import(
        `$lib/data/json/mchn-playlist-info.json`
    ).catch(() => {
        error(404, ERROR_MSG);
    })) as unknown as PlaylistData;

    return {
        playlists: {
            kimuPlaylist,
            lprPlaylist,
            mchnPlaylist,
        },
    };
}
