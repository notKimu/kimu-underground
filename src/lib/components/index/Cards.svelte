<script lang="ts">
    const { name, icon, link }: { name: string; icon: string; link: string } =
        $props();
</script>

<a href={link} class="container" target="_blank">
    {@html icon}
    <h3>{name}</h3>
</a>

<style>
    .container {
        display: flex;
        align-items: center;
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
