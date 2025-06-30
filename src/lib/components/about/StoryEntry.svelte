<script lang="ts">
    const {
        title,
        icon,
        path,
        num,
    }: { title: string; icon: string; path: string; num: number } = $props();
</script>

<a class="story-container no-deco" href={path}>
    <img src={icon} alt="" />
    <h3>{title}</h3>
    <div class="story-num">
        0{num}
    </div>

    <svg
        class="story-selector"
        fill="var(--color-fg)"
        width="2rem"
        height="2rem"
        viewBox="0 0 12 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="m 12.000001,8 v 4 H 8 v 4 H 4 v 4 H 0 V 0 h 4 v 4 h 4 v 4 z"
        /></svg
    >
</a>

<style>
    .story-container {
        position: relative;
        height: 4rem;
        width: 100%;
        display: flex;
        align-items: center;
        gap: var(--padding-m);
        border: var(--border-width) solid var(--color-border);
    }

    .story-num {
        width: 4rem;
        height: 100%;
        display: grid;
        place-items: center;
        margin-left: auto;
        border-left: var(--border-width) solid var(--color-border);
    }

    .story-container:hover .story-num {
        background-color: var(--color-fg);
        color: var(--color-bg);
    }

    .story-selector {
        display: none;
        position: absolute;
        height: 2rem;
        width: 2rem;
        top: 0;
        bottom: 0;
        left: -2.5rem;
        margin: auto 0;
        animation: activeclass 1s ease infinite;
    }

    .story-container:hover .story-selector {
        display: block;
    }

    @keyframes activeclass {
        0%,
        100% {
            left: -2.5rem;
        }
        50% {
            left: -4rem;
        }
    }
</style>
