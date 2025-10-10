<script>
    import { _ } from "svelte-i18n";
    import Separator from "../Separator.svelte";
    // Images
    import CharacterImg from "$lib/assets/images/lain_walk.webp";
</script>

<div class="about-character-view">
    <div class="about-character-img">
        <img
            src={CharacterImg}
            alt="Character walking"
        />
    </div>

    <Separator margin={false} />

    <div class="about-character-info">
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.nick")}</b>
            <p>:</p>
            <p>キム</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.level")}</b>
            <p>:</p>
            <p>20</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.hp")}</b>
            <p>:</p>
            <p>???</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.mana")}</b>
            <p>:</p>
            <p>???</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.rank")}</b>
            <p>:</p>
            <p>01</p></span
        >
    </div>
</div>

<style>
    .about-character-view {
        height: 100%;
        width: 15rem;

        display: flex;
        flex-direction: column;
        gap: var(--padding-s);
        
        border-right: var(--border-width) solid var(--color-border);
        padding: var(--padding-m);
    }

    .info-separator {
        display: grid;
        grid-template-columns: 1fr min-content 1fr;
    }
    .info-separator p:last-child {
        text-align: right;
    }

    .about-character-img {
        height: 17.6rem;
        display: flex;
        justify-content: center;
    }
    .about-character-img img {
        height: 100%;
        width: auto;
    }
</style>
