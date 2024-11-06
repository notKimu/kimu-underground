<script lang="ts">
  export let name: string;
  export let description: string;
  export let img: string;
</script>

<div class="project-container">
  <img src={img} alt="" />

  <div class="project-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
</div>

<style>
  .project-container {
    position: relative;
    height: 5rem;
    display: flex;
    gap: var(--padding-s);
    background-color: var(--color-dark);
    overflow: hidden;
    padding: var(--padding-s);
  }

  .project-container:hover::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -20%;
    height: 10rem;
    width: 5rem;

    background-color: var(--color-fg);
    opacity: 0.1;
    transform: skewX(-25deg);
    animation: shine 2s;
  }

  @keyframes shine {
    0% {
      left: -20%;
      filter: blur(10px);
    }
    50% {
      filter: blur(0px);
    }
    100% {
      left: 110%;
      filter: blur(10px);
    }
  }
</style>
