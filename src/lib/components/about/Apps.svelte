<script lang="ts">
	import VSCodiumImg from "$lib/assets/images/applications/vscodium.webp?enhanced";
	import NeovimImg from "$lib/assets/images/applications/neovim.webp?enhanced";
	import WinampImg from "$lib/assets/images/applications/winamp.webp?enhanced";
	import ObsidianImg from "$lib/assets/images/applications/obsidian.webp?enhanced";
	import KritaImg from "$lib/assets/images/applications/krita.webp?enhanced";
	import LibreWolfImg from "$lib/assets/images/applications/librewolf.webp?enhanced";
</script>

<div>
    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={VSCodiumImg} alt="" loading="lazy">
        </div>
        <p>VSCodium</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={NeovimImg} alt="" loading="lazy">
        </div>
        <p>Neovim</p>
    </div>
    
    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={WinampImg} alt="" loading="lazy">
        </div>
        <p>Winamp</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={ObsidianImg} alt="" loading="lazy">
        </div>
        <p>Obsidian</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={KritaImg} alt="" loading="lazy">
        </div>
        <p>Krita</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={LibreWolfImg} alt="" loading="lazy">
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
        height: 100%;
        width: 3rem;
        display: grid;
        place-items: center;
        height: fit-content;
        padding: var(--padding-s);
    }
    .app-image img{
        height: auto;
        width: 100%;
    }
</style>