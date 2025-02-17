<script lang="ts">
    import Separator from "$lib/components/Separator.svelte";

    export let data;
</script>

<article>
    <h1 class="title">{data.title}</h1>

    <Separator />

    {#if data.warning}
        <div class="warning-container">
            <div class="warning-bar"></div>

            <p class="warning-content">></p>

            <span class="warning-content">
                {data.warning}
            </span>
        </div>
    {/if}

    <div class="content">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    .warning-container {
        display: grid;
        grid-template-columns: 0.5rem 1rem 1fr;
        background-color: var(--color-warning);
    }

    .warning-bar {
        height: 100%;
        background-color: var(--color-accent);
    }

    .warning-content {
        padding: var(--padding-s);
    }

    .content {
        margin-top: var(--padding-x);
    }
</style>
