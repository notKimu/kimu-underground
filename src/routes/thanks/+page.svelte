<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import WavyText from "$lib/components/WavyText.svelte";
    // Images
    import KimuImg from "$lib/assets/images/credits/kimu.webp?enhanced";
    import DysnomiaImg from "$lib/assets/images/credits/dysnomia.webp?enhanced";
    import LaikaImg from "$lib/assets/images/credits/laika.webp?enhanced";
    import Licorn3Img from "$lib/assets/images/credits/licorn3.webp?enhanced";
    import SammwyImg from "$lib/assets/images/credits/sammwy.webp?enhanced";
    import StarImg from "$lib/assets/images/star.gif"

    type Person =  "notkimu" | "licorn3" | "sammwy" | "dysnomia" | "laika";
    let selected: Person = $state("notkimu");
    let message = $state($_("page.thanks.texts.notkimu"));

    function updateSelected(person: Person) {
        selected = person;
        message = $_("page.thanks.texts." + selected);
    }

    updateSelected("notkimu")
</script>

<svelte:head>
    <title>{$_("page.thanks.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.thanks.title")}</h1>

<Separator />

<div class="thanks-container">
    <div class="thanks-text">
        {#key message}
            <p><span class="thanks-text__bash">navi:[{selected}]$</span>  <WavyText text={message} fadeIn={true} delay={0.02}/></p>
        {/key}
    </div>

    <div class="thanks-selector">
        <button class="thanks-selector__person {selected === 'licorn3' ? 'person-selected' : ''}" onclick={() => updateSelected("licorn3")}>
            <div class="thanks-selector__person-img">
                <enhanced:img src={Licorn3Img} loading="lazy" />
            </div>

            <a class="desktop-only" href="https://x.com/licorn3_" target="_blank">
                <p>@licorn3_</p>
            </a>

            <img alt="Mario 64 star gif" class="star-selection" src={StarImg} loading="lazy" />
        </button>

        <button class="thanks-selector__person {selected === 'sammwy' ? 'person-selected' : ''}" onclick={() => updateSelected("sammwy")}>
            <div class="thanks-selector__person-img">
                <enhanced:img src={SammwyImg} loading="lazy" />
            </div>

            <a class="desktop-only" href="https://x.com/sammwy" target="_blank">
                <p>@sammwy</p>
            </a>

            <img alt="Mario 64 star gif" class="star-selection" src={StarImg} loading="lazy" />
        </button>

        <button class="thanks-selector__person {selected === 'notkimu' ? 'person-selected' : ''}" onclick={() => updateSelected("notkimu")}>
            <div class="thanks-selector__person-img">
                <enhanced:img src={KimuImg} loading="lazy" />
            </div>

            <a class="desktop-only" href="https://x.com/notkimu" target="_blank">
                <p>@notkimu</p>
            </a>

            <img alt="Mario 64 star gif" class="star-selection" src={StarImg} loading="lazy" />
        </button>

        <button class="thanks-selector__person {selected === 'dysnomia' ? 'person-selected' : ''}" onclick={() => updateSelected("dysnomia")}>
            <div class="thanks-selector__person-img">
                <enhanced:img src={DysnomiaImg} loading="lazy" />
            </div>

            <p class="desktop-only">@dysnomia</p>

            <img alt="Mario 64 star gif" class="star-selection" src={StarImg} loading="lazy" />
        </button>

        <button class="thanks-selector__person {selected === 'laika' ? 'person-selected' : ''}" onclick={() => updateSelected("laika")}>
            <div class="thanks-selector__person-img">
                <enhanced:img src={LaikaImg} loading="lazy" />
            </div>

            <p class="desktop-only">@laika</p>

            <img alt="Mario 64 star gif" class="star-selection" src={StarImg} loading="lazy" />
        </button>
        
    </div>
</div>

<style>
    .thanks-container {
        display: grid;
        grid-template-rows: 15rem 1fr;
        border: var(--border-width) solid var(--color-border);
    }

    /* TEXT */
    .thanks-text {
        font-size: larger;
        border-bottom: var(--border-width) solid var(--color-border);
        padding: var(--padding-m);
    }

    .thanks-text__bash {
        color: var(--color-accent);
    }

    /* PERSON SELECTOR */
    .thanks-selector {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
    

    .thanks-selector__person {
        position: relative;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1.5rem;
        flex-direction: column;
    }
    .thanks-selector__person:not(:last-child) {
        border-right: var(--border-width) solid var(--color-border);
    }

    .thanks-selector__person p {
        height: 100%;
        font-family: "departure-mono";
        align-content: center;
        background-size: 100% 200%;
        background-position: 0% -100%;
        background-image: linear-gradient(to bottom, var(--color-accent) 50%, transparent 50%);
        -webkit-transition: background-position .1s;
        -moz-transition: background-position .1s;
        transition: background-position .1s;
    }
    .person-selected p {
        color: var(--color-bg);
        background-position: 0% 0%;
    }

    .person-selected .star-selection {
        display: block;
    }
    .star-selection {
        position: absolute;
        top: 0;
        right: 0;
        height: 1.5rem;
        width: 1.5rem;
        display: none;
    }

    .thanks-selector__person-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--padding-m);
    }

    .thanks-selector__person-img img {
        width: 100%; /* Make the image scale to fit the div width */
        height: auto; /* Maintain aspect ratio */
        display: block; /* Removes extra space under the image */
        object-fit: cover; /* Ensures the image covers the area, cropping if necessary */
        transform: rotate(-5deg);
        filter: drop-shadow(0px 0px 0px #ffffff);
    }
    .person-selected .thanks-selector__person-img img {
        animation: doodleShake 1s infinite steps(1);
    }

    /* ANIMATIONS */
    @keyframes doodleShake {
        0%, 100% {
            transform: rotate(5deg);
        }
        50% {
           transform: rotate(-5deg); 
        }
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .thanks-selector__person {
            grid-template-rows: 1fr;
        }
    }
</style>
