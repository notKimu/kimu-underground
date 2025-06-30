<script lang="ts">
    const { margin = true } = $props();
</script>

<div class="separator">
    <div class="line"></div>
    <svg
        height="100%"
        viewBox="0 0 211.67042 211.66732"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            style="fill:none;fill-opacity:0;stroke:var(--color-fg);stroke-width:14.7769;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7.9;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
            d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
            transform="matrix(0.87569946,0,0,0.87568663,66.064788,48.073441)"
        /><path
            style="fill:var(--color-fg);fill-opacity:1;stroke:none;stroke-width:11.0408;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:7.9;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
            d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
            transform="matrix(0.50552401,0,0,0.50551661,82.876324,72.489838)"
        /></svg
    >
    <div class="line"></div>
</div>

{#if margin}
    <div class="margin"></div>
{/if}

<style>
    .separator {
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        gap: var(--padding-m);
    }
    .line {
        width: 100%;
        height: 0.1rem;
        background-color: var(--color-fg);
    }

    .margin {
        height: var(--padding-m);
    }
</style>
