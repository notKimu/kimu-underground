<script lang="ts">
    import CameraImg from "$lib/assets/images/inventory/camera.webp?enhanced";
    import PhoneImg from "$lib/assets/images/inventory/mobile.webp?enhanced";
    import IpodImg from "$lib/assets/images/inventory/ipod-mini.webp?enhanced";
    import DapImg from "$lib/assets/images/inventory/mp3.webp?enhanced";
</script>

<div class="about-inventory">
    <div class="inventory-item">
        <div>
            <enhanced:img src={CameraImg} alt="" loading="lazy">
        </div>
        <p>Nikon L19</p>
    </div>

    <div class="inventory-item">
        <div>
            <enhanced:img src={PhoneImg} alt="" loading="lazy">
        </div>
        <p>Mi Mix 2s</p>
    </div>

    <div class="inventory-item">
        <div>
            <enhanced:img src={IpodImg} alt="" loading="lazy">
        </div>
        <p>iPod Mini</p>
    </div>

    <div class="inventory-item">
        <div>
            <enhanced:img src={DapImg} alt="" loading="lazy">
        </div>
        <p>Fiio M3K</p>
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
    }
</style>