<script lang="ts">
    import VSCodiumImg from "$lib/assets/images/applications/vscodium.webp?enhanced";
    import NeovimImg from "$lib/assets/images/applications/neovim.webp?enhanced";
    import AudaciousImg from "$lib/assets/images/applications/audacious.png?enhanced";
    import ObsidianImg from "$lib/assets/images/applications/obsidian.webp?enhanced";
    import FireAlpacaImg from "$lib/assets/images/applications/firealpaca.webp?enhanced";
    import LibreWolfImg from "$lib/assets/images/applications/librewolf.webp?enhanced";
</script>

<div class="apps-container">
    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={VSCodiumImg} alt="" loading="lazy" />
        </div>
        <p>VSCodium</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={NeovimImg} alt="" loading="lazy" />
        </div>
        <p>Neovim</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={AudaciousImg} alt="" loading="lazy" />
        </div>
        <p>Audacious</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={ObsidianImg} alt="" loading="lazy" />
        </div>
        <p>Obsidian</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={FireAlpacaImg} alt="" loading="lazy" />
        </div>
        <p>FireAlpaca</p>
    </div>

    <div class="app-entry">
        <div class="app-image">
            <enhanced:img src={LibreWolfImg} alt="" loading="lazy" />
        </div>
        <p>LibreWolf</p>
    </div>
</div>

<style>
    .apps-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--padding-m);
    }

    .app-entry {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--padding-s);
        padding: var(--padding-s) var(--padding-m);
    }
    
    .app-image {
        position: relative;
        height: 100%;
        width: 3.5rem;
        display: grid;
        place-items: center;
        height: fit-content;
        padding: var(--padding-s);
    }
    .app-image::after {
        content: url("data:image/ico;base64, AAABAAIAICACAAEAAQAwAQAAJgAAACAgEAABAAQA6AIAAFYBAAAoAAAAIAAAAEAAAAABAAEAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAH///+B////gfv//4Hz//+B4f//geH//4Hg//+B4P//geB//4HwP/+B+B//gfgP54H8B8eB/gPHgf8Ah4H/AAeB/8AHgf/wB4H//AeB/+AHgf/gB4H///+B////gf///4AAAAAAAAAAAAAAAAAAAAAP///////////////8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAAD////////////////KAAAACAAAABAAAAAAQAEAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAAAACAgACAAAAAgACAAICAAADAwMAAgICAAAAA/wAA/wAAAP//AP8AAAD/AP8A//8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////wAAAP////////////////8AAAD///8P////////////AAAA///wD////////////wAAAP//8AD///////////8AAAD///AAD///////////AAAA///wAA///////////wAAAP//8AAP//////////8AAAD///AAAP//////////AAAA///wAAAP/////////wAAAP///wAAAP////////8AAAD///8AAAAP////AP//AAAA////8AAAAP//8AD//wAAAP////8AAAAP//AA//8AAAD/////8AAAAA8AAP//AAAA//////AAAAAAAAD//wAAAP//////8AAAAAAA//8AAAD////////wAAAAAP//AAAA//////////AAAAD//wAAAP///////wAAAAAA//8AAAD///////8AAAAAAP//AAAA/////////////////wAAAP////////////////8AAAD/////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAAD////////////////");
        position: absolute;
        left: -25%;
        bottom: -20%;
        transform: scale(55%);
    }
    .app-image img {
        height: auto;
        width: 100%;
    }
</style>
