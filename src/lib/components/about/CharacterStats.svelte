<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "../Separator.svelte";
    // Images
    import CharacterImg from "$lib/assets/images/lain_walk.webp";

    function getAge(): number {
        var today = new Date();
        var birthDate = new Date(2005, 8, 24);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
</script>

<div class="about-character-view">
    <div class="about-character-img">
        <img src={CharacterImg} alt="Character walking" />
    </div>

    <Separator margin={false} />

    <div class="about-character-info">
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.nick")}</b>
            <p>:</p>
            <p>Kimu</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.level")}</b>
            <p>:</p>
            <p>{getAge()}</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.hp")}</b>
            <p>:</p>
            <p>???</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.source")}</b>
            <p>:</p>
            <div class="info-separator__flags">
                <svg width="2rem" height="1.7rem" preserveAspectRatio="none" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="20" rx="2" fill="white" /><mask id="mask0_503_3600" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" fill="#DD172C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V14.6667H0V20Z" fill="#DD172C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.6667H28V5.33334H0V14.6667Z" fill="#FFD133"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.33337 9.33333H8.66671V10H7.33337V9.33333Z" fill="#FFEDB1"/><path d="M6.39116 8.99999H8.27543C8.47044 8.99999 8.6238 9.16666 8.60761 9.361L8.43633 11.4164C8.39314 11.9347 7.95987 12.3333 7.43978 12.3333H7.2268C6.70671 12.3333 6.27345 11.9347 6.23026 11.4164L6.05898 9.36101C6.04278 9.16667 6.19615 8.99999 6.39116 8.99999Z" stroke="#A41517" stroke-width="0.666667"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 10H8.66667V10.6667H8L7.33333 12L6.66667 10.6667H6V10Z" fill="#A41517"/><rect x="4" y="8" width="1.33333" height="4.66667" rx="0.666667" fill="#A41517"/><rect x="9.33337" y="8" width="1.33333" height="4.66667" rx="0.666667" fill="#A41517"/><path d="M6 7.73332C6 7.14422 6.47756 6.66666 7.06667 6.66666H7.6C8.1891 6.66666 8.66667 7.14422 8.66667 7.73332V7.73332C8.66667 7.8806 8.54728 7.99999 8.4 7.99999H6.26667C6.11939 7.99999 6 7.8806 6 7.73332V7.73332Z" fill="#A41517"/><defs><rect width="28" height="20" rx="2" fill="white"/></defs></svg>
                <svg width="2rem" height="1.7rem" preserveAspectRatio="none" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/><mask id="mask0_503_4039" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" fill="#88BBE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#88BBE8"/><path d="M14 12.3333C15.2887 12.3333 16.3333 11.2887 16.3333 10C16.3333 8.71134 15.2887 7.66667 14 7.66667C12.7113 7.66667 11.6667 8.71134 11.6667 10C11.6667 11.2887 12.7113 12.3333 14 12.3333Z" fill="#F4B32E" stroke="#DB7A2C" stroke-width="0.666667"/><defs><clipPath id="clip0_503_4039"><rect width="28" height="20" rx="2" fill="white"/></clipPath></defs></svg>
            </div>
        </span>
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

    .info-separator__flags {
        display: flex;
        justify-content: end;
        gap: var(--padding-s);
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
