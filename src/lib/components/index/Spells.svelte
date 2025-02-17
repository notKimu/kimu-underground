<script lang="ts">
    const {
        maxSlots,
        usedSlots,
        level,
    }: { maxSlots: number; usedSlots: number; level: number } = $props();
</script>

<div class="spell-container">
    <div class="spell">
        {#each Array(maxSlots - usedSlots) as _}
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 211.67042 211.66732"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                ><g transform="translate(4.7808096e-4,-3.9548783e-5)"
                    ><path
                        style="fill:none;fill-opacity:0;stroke:var(--color-fg);stroke-width:14.7769;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7.9;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
                        d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
                        transform="matrix(0.87569946,0,0,0.87568663,66.064788,48.073441)"
                    /></g
                ></svg
            >
        {/each}

        {#each Array(usedSlots) as _}
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 211.67042 211.66732"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                ><g transform="translate(4.7808096e-4,-3.9548783e-5)"
                    ><path
                        style="fill:none;fill-opacity:0;stroke:var(--color-fg);stroke-width:14.7769;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7.9;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
                        id="path2"
                        d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
                        transform="matrix(0.87569946,0,0,0.87568663,66.064788,48.073441)"
                    />
                    <path
                        style="fill:var(--color-fg);fill-opacity:1;stroke:none;stroke-width:11.0408;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7.9;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
                        id="path3"
                        d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
                        transform="matrix(0.50552401,0,0,0.50551661,82.876324,72.489838)"
                    /></g
                ></svg
            >
        {/each}
    </div>

    <div class="spell-separator mobile-only"></div>

    <p>L{level}</p>
</div>

<style>
    .spell-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--padding-s);
    }

    .spell {
        display: flex;
        gap: var(--padding-s);
    }

    .spell-separator {
        height: 0.1rem;
        width: 100%;
        opacity: 0.5;
        background-color: var(--color-fg);
    }

    /* RESPONSIVENESS */
    @media screen and (max-width: 728px) {
        .spell {
            flex-direction: row-reverse;
        }
    }
</style>
