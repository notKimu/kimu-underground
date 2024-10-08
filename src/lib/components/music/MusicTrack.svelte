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
        width: 11rem;
        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
        padding: var(--padding-s);
        background-color: var(--color-dark);
    }
</style>