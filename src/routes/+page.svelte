<script lang="ts">
    import { _ } from "svelte-i18n";
    import WavyText from "$lib/components/WavyText.svelte";
    import Separator from "$lib/components/Separator.svelte";
    import Spells from "$lib/components/index/Spells.svelte";
    import Cards from "$lib/components/index/Cards.svelte";
    // Images
    import KimuGithubImg from "$lib/assets/images/kimu-github.webp?enhanced";

    const messages: string[] = $_("page.home.greeting") as unknown as string[];
    let currentMessage = $state(0);

    function randomMessage() {
        currentMessage = Math.floor(Math.random() * messages.length);
        if (currentMessage === 0) randomMessage();
    }
</script>

<svelte:head>
    <title>Kimu's Underground</title>
</svelte:head>

<h1 class="title">
    <WavyText text="Kimu's Underground" />
</h1>

<Separator />

<div class="container">
    <div class="character-container">
        <div class="character-dialog-container">
            <enhanced:img
                class="character-img"
                src={KimuGithubImg}
                alt="Profile of Kimu on Github"
                loading="lazy"
            />

            {#key messages[currentMessage]}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="character-dialog" onclick={() => randomMessage()}>
                    <!-- Connector for the speech balloon -->
                    <svg
                        class="character-dialog-connector"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path d="M20.697 24L9.303 16.003 20.697 8z" /></svg
                    >

                    <div class="character-dialog__name-container">
                        <h3>Kimu</h3>

                        <svg
                            class="character-dialog__next"
                            fill="var(--color-fg)"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 12 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="m 12.000001,8 v 4 H 8 v 4 H 4 v 4 H 0 V 0 h 4 v 4 h 4 v 4 z"
                            /></svg
                        >
                    </div>

                    <span class="character-dialog__text">
                        <WavyText
                            text={messages[currentMessage]}
                            fadeIn={true}
                            delay={0.02}
                        />
                    </span>
                </div>
            {/key}
        </div>

        <div class="character-spells-container">
            <Spells maxSlots={4} usedSlots={3} level={1} />
            <Spells maxSlots={3} usedSlots={1} level={2} />
            <Spells maxSlots={3} usedSlots={2} level={3} />
        </div>
    </div>

    <p>{@html $_("page.home.body")}</p>

    <div class="vim-title">
        <p>index.md</p>
        <p>1,1</p>
        <p>All</p>
    </div>

    <div class="cards-container">
        <Cards
            icon={""}
            name={$_("page.home.links.wishlist")}
            link={"https://skitter-swing-aed.notion.site/Wishlist-14b16e4aa6c68052ae40dca6bac0fbd4"}
        />
        <Cards
            icon={""}
            name={$_("page.home.links.game-tracker")}
            link={"https://skitter-swing-aed.notion.site/Lista-de-juegos-14e16e4aa6c6801eb595c044fb4edf42"}
        />
        <Cards
            icon={""}
            name={$_("page.home.links.read-list")}
            link={"https://skitter-swing-aed.notion.site/Lista-de-lectura-14c16e4aa6c680be80d2c02ef31844d6"}
        />
        <Cards
            icon={""}
            name={$_("page.home.links.donate")}
            link={"https://ko-fi.com/notkimu"}
        />
        <Cards
            icon={""}
            name={$_("page.home.links.my-server")}
            link={"https://discord.gg/NfeXrQdXdE"}
        />
        <Cards
            icon={""}
            name={$_("page.home.links.youtube")}
            link={"https://www.youtube.com/@kimu_x64"}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-x);
    }

    /* CHARACTER */
    .character-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: var(--padding-m);
    }

    .character-dialog-container {
        display: grid;
        flex-wrap: wrap;

        grid-template-columns: 5rem auto;
        gap: var(--padding-x);
    }

    .character-img {
        width: 100%;
        height: auto;
    }

    .character-dialog {
        position: relative;
        width: fit-content;
        padding: var(--padding-m);
        border: var(--color-border) dashed var(--border-width);
    }

    .character-dialog__name-container {
        display: flex;
        justify-content: space-between;
    }
    .character-dialog__next {
        height: 1rem;
        width: 1rem;
        top: 0;
        animation: messageArrow 2s ease infinite;
    }

    .character-dialog__text {
        font-size: large;
    }

    .character-dialog-connector {
        position: absolute;
        left: -1.1rem;
        height: 1.7rem;
        fill: var(--color-border);
    }

    .character-spells-container {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        gap: var(--padding-s);
        margin-left: auto;
    }

    /* SOCIALS */
    .vim-title {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 15% min-content;
        background-color: var(--color-fg);
    }
    .vim-title p {
        color: var(--color-bg);
        padding: 0 var(--padding-s);
    }

    /* CARDS */
    .cards-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--padding-m);
    }

    /* ANIMATIONS */
    @keyframes messageArrow {
        0%,
        100% {
            margin-right: 0rem;
        }
        50% {
            margin-right: 1rem;
        }
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .character-container {
            flex-direction: column;
        }
        .character-spells-container {
            width: 100%;
            align-items: unset;
            margin-left: unset;
        }

        .cards-container {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
