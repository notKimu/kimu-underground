<script lang="ts">
    import CameraImg from "$lib/assets/images/inventory/camera.webp?enhanced";
    import PhoneImg from "$lib/assets/images/inventory/mobile.webp?enhanced";
    import DapImg from "$lib/assets/images/inventory/dap.webp?enhanced";
</script>

<div class="about-inventory">
    <div class="inventory-item">
        <div>
            <enhanced:img src={PhoneImg} alt="" loading="lazy"> </enhanced:img>
        </div>
        <p>Pixel 10</p>
    </div>

    <div class="inventory-item">
        <div>
            <enhanced:img src={DapImg} alt="" loading="lazy"> </enhanced:img>
        </div>
        <p>HiBy M500</p>
    </div>

    <div class="inventory-item">
        <div>
            <enhanced:img src={CameraImg} alt="" loading="lazy"> </enhanced:img>
        </div>
        <p>Nikon L19</p>
    </div>
</div>

<style>
    .about-inventory {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: var(--padding-x);
    }

    .inventory-item {
        height: fit-content;
        display: grid;
        grid-template-rows: 1fr 2rem;
        gap: var(--padding-m);
    }
    .inventory-item img {
        height: auto;
        width: 100%;
        image-rendering: pixelated;
        filter: drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white)
            drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white);
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .about-inventory {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .inventory-item {
            display: flex;
            align-items: center;
            padding: var(--padding-s) 0;
        }
        .inventory-item:not(:last-child) {
            border-bottom: var(--border-width) solid var(--color-border);
        }
        .inventory-item img {
            height: auto;
            max-height: 100%;
            width: 3rem;
        }
    }
</style>
