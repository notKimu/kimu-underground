<script>
  import Separator from "../Separator.svelte";
  // Images
  import StandImg from "$lib/assets/images/bocchi_stand_badass.webp?enhanced";
</script>

<div class="about-character-view">
  <enhanced:img class="about-character-image" src={StandImg} alt="Character" />

  <Separator margin={false} />

  <div class="about-character-info">
    <span class="info-separator"
      ><b>Name</b>
      <p>:</p>
      <p>キム</p></span
    >
    <span class="info-separator"
      ><b>Level</b>
      <p>:</p>
      <p>19</p></span
    >
    <span class="info-separator"
      ><b>HP</b>
      <p>:</p>
      <p>???</p></span
    >
    <span class="info-separator"
      ><b>Mana</b>
      <p>:</p>
      <p>???</p></span
    >
    <span class="info-separator"
      ><b>Rank</b>
      <p>:</p>
      <p>01</p></span
    >
  </div>
</div>

<style>
  .about-character-view {
    width: 15rem;
    display: flex;
    flex-direction: column;
    gap: var(--padding-s);
    border-right: var(--border-width) solid var(--color-border);
    padding: var(--padding-m);
  }


  .info-separator {
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
  }
  .info-separator p:last-child {
    text-align: right;
  }

  .about-character-image {
    height: 100%;
    width: 100%;
  }
</style>
