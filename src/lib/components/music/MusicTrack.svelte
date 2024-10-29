<script lang="ts">
    export let cover = "";
    export let title = "";
    export let artist = "";
    export let link ="";
</script>

<a href={link} target="_blank" class="track-container">
    <img src={cover} alt="">
    <div class="track-details">
        <h5>{title}</h5>
        <h6>{artist}</h6>
    </div>
</a>

<style>
    .track-container {            
        display: flex;
        flex-direction: row;
        gap: var(--padding-s);
        padding: var(--padding-s);
        background-color: var(--color-dark);
    }

    .track-container img {
        width: 50%;
    }

    @media screen and (max-width: 728px) {
        .track-container {
            flex-direction: column;
        }
    }
</style>