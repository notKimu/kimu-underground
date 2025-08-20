<script lang="ts">
    const {
        name,
        img,
        tier,
        darkMode = false,
    }: {
        name: string;
        img: any;
        tier: "s" | "a" | "b";
        darkMode?: boolean;
    } = $props();
</script>

<div class="game" style={`border-left: .5rem solid var(--tier-${tier});`}>
    <div class="game-info">
        <enhanced:img
            class={darkMode ? "invert" : ""}
            src={img}
            alt=""
            loading="lazy"
        />
        <h2>{name}</h2>
    </div>

    <div class="game-tier">
        <h2 class="desktop-only">Tier</h2>
        <h2><span class="tier-letter">{tier}</span></h2>
    </div>
</div>

<style>
	:root {
		--tier-s: #dfcc6e;
		--tier-a: #8c8891;
		--tier-b: var(--color-fg);
		--tag-bg: #333333;
		--tag-border: #5c5c5c;
	}

    .game {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        padding: var(--padding-s);
        background-color: var(--color-dark);
    }

    .game-info {
        display: flex;
        align-items: center;
        gap: var(--padding-m);
    }
    .game-info img {
        height: 4rem;
        width: auto;
    }

    .game-tier {
        display: flex;
        align-items: center;
        gap: var(--padding-s);
    }

    /* TIERS */
    .tier-letter {
        text-transform: capitalize;
    }

    /* INVERT DARK IMAGES ON DARK MODE */
    @media (prefers-color-scheme: dark) {
        .invert {
            filter: invert();
        }
    }
</style>
