<script lang="ts">
    const { cover = "", title = "", artist = "", link = "" } = $props();
</script>

<a href={link} target="_blank" class="track-container">
    <img src={cover} alt="" loading="lazy" decoding="async" />
    <div class="track-details">
        <h3 class="track-details-title track-details-text">{title}</h3>
        <h4 class="track-details-artist track-details-text">{artist}</h4>
    </div>
</a>

<style>
    .track-container {
        display: flex;
        flex-direction: row;
        gap: var(--padding-s);
        padding: var(--padding-s);
        background-color: var(--color-dark);
        overflow: hidden;
    }

    .track-container img {
        width: clamp(4rem, 10vw, 7rem);
    }

    .track-details {
        overflow: hidden;
    }

    .track-details-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (max-width: 728px) {
        .track-container {
            flex-direction: column;
        }
    }
</style>
