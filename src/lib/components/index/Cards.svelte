<script lang="ts">
  export let name: string;
  export let icon: string;
  export let link: string;
</script>

<a href={link} class="container">
  {@html icon}
  <h3>{name}</h3>
</a>

<style>
  .container {
    display: flex;
    gap: var(--padding-m);
    border: var(--color-fg) solid var(--border-width);
    padding: var(--padding-m);
    text-decoration: none;
  }

  .container:hover {
    background-color: var(--color-fg);
  }
  .container:hover h3 {
    color: var(--color-bg);
  }
</style>
