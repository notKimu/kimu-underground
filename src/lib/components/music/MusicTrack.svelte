<script lang="ts">
  export let cover = "";
  export let title = "";
  export let artist = "";
  export let link = "";
</script>

<a href={link} target="_blank" class="track-container">
  <img src={cover} alt="" />
  <div class="track-details">
    <h4 class="track-details-title">{title}</h4>
    <h5 class="track-details-artist">{artist}</h5>
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
    width: clamp(4rem, 10vw, 7rem);
  }

  .track-details-title {
    font-size: clamp(.5rem, 15vw, .9rem);
  }

  @media screen and (max-width: 728px) {
    .track-container {
      flex-direction: column;
    }
  }
</style>
