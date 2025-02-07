<script lang="ts">
	import VSCodium from "$lib/assets/images/vscodium.png";
	import Neovim from "$lib/assets/images/neovim.png";
	import Winamp from "$lib/assets/images/winamp.png";
	import Obsidian from "$lib/assets/images/obsidian.png";
	import Krita from "$lib/assets/images/krita.png";
	import LibreWolf from "$lib/assets/images/librewolf.png";
</script>

<div>
    <div class="app-entry">
        <div class="app-image">
            <img src={VSCodium} alt="">
        </div>
        <p>VSCodium</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <img src={Neovim} alt="">
        </div>
        <p>Neovim</p>
    </div>
    
    <div class="app-entry">
        <div class="app-image">
            <img src={Winamp} alt="">
        </div>
        <p>Winamp</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <img src={Obsidian} alt="">
        </div>
        <p>Obsidian</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <img src={Krita} alt="">
        </div>
        <p>Krita</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <img src={LibreWolf} alt="">
        </div>
        <p>LibreWolf</p>
    </div>
</div>

<style>
    .app-entry {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--padding-m);
        padding: var(--padding-m);
    }
    .app-entry:not(:last-child) {
        border-bottom: var(--border-width) solid var(--color-border);
    }

    .app-image {
        display: flex;
        justify-content: center;
        height: fit-content;
        width: 3rem;
    }
    .app-image img{
        height: 2rem;
    }
</style>