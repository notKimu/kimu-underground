<script lang="ts">
    import CameraPhoto from "$lib/images/camera.png";
    import PhonePhoto from "$lib/images/mobile.png";
    import DapPhoto from "$lib/images/mp3.png";
</script>

<div class="about-inventory">
    <div class="inventory-item">
        <img src={CameraPhoto} alt="">
        <p>Nikon L19</p>
    </div>

    <div class="inventory-item">
        <img src={PhonePhoto} alt="">
        <p>Mi Mix 2s</p>
    </div>

    <div class="inventory-item">
        <img src={DapPhoto} alt="">
        <p>Fiio M3K</p>
    </div>
</div>

<style>
    .about-inventory {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: var(--padding-x);
    }

    .inventory-item {
        display: grid;
        grid-template-rows: 1fr 2rem;
    }
    .inventory-item img {
        width: 100%;
        image-rendering: pixelated;
    }
    .inventory-item p {
        margin-top: auto;
    }
</style>