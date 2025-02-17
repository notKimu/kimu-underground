export type PlaylistData = {
    name: string;
    description: string;
    external_urls: {
        spotify: string;
    };
    images: Image[];
};

export type Track = {
    added_at: string;
    track: {
        album: {
            href: string;
            id: string;
            images: Image[];
            name: string;
        };
        artists: TrackArtist[];
        disc_number: number;
        track_number: number;
        external_urls: {
            spotify: string;
        };
        id: string;
        name: string;
    };
};

type TrackArtist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
};

type Image = {
    url: string;
};
