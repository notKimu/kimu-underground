<script lang="ts">
    type Props = {
        name: string;
        icon?: string;
        link: string;
        newtab?: boolean;
    };

    const { name, icon, link, newtab }: Props = $props();
</script>

<a href={link} class="container" target={newtab ? "_blank" : ""}>
    {#if icon}
        <svg
            class="container__icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            {@html icon}
        </svg>
    {/if}
    <h3 class="container__title subtitle">{name}</h3>
</a>

<style>
	:root {
		--container-height: 5rem;
	}

    .container {
        height: var(--container-height);

        display: flex;
        align-items: center;
        gap: var(--padding-m);

        background: linear-gradient(transparent, var(--color-border)) center no-repeat;
		background-position: 0px 100px;
		transition: background-position .15s ease-in-out, box-shadow .3s;
        border: var(--color-fg) solid var(--border-width);
        padding: var(--padding-m);
        text-decoration: none;
    }
    .container:hover {
		background-position: 0px 0px;
		box-shadow: 0 0 10px 1px var(--color-border);
    }

    .container__icon {
        height: calc(var(--container-height) - 3rem);
        fill: var(--color-fg);
    }
</style>
