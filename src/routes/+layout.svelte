<script lang="ts">
    import "$lib/i18n";
    import "../app.css";
    import { isLoading } from "svelte-i18n";
    import Header from "$lib/components/Header.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    // Images
    import FrameImg from "$lib/assets/images/frame.webp";
    import GuraSpinImg from "$lib/assets/images/gawr-spin.gif";

    let { children } = $props();
</script>

<div id="app">
    <img src={FrameImg} class="frame" alt="">
    <div class="polka"></div>
    <div class="crt"></div>

    {#if $isLoading}
        <center class="loading-container">
            <img class="loading-img" src={GuraSpinImg} alt="" loading="lazy" />
            <h1>...</h1>
        </center>
    {:else}
        <Header />
        <Sidebar />
        <main>
            {@render children()}
        </main>
    {/if}
</div>

<style>
    .frame {
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        width: 100dvw;

        pointer-events: none;
		transition: 0s;
        z-index: 999999999;
    }

    .polka {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        pointer-events: none;
        opacity: 0.3;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23904ba5' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        mask-image: -moz-linear-gradient(
            180deg,
            transparent 60%,
            rgba(0, 0, 0, 1) 100%
        );
        mask-image: -webkit-linear-gradient(
            180deg,
            transparent 60%,
            rgba(0, 0, 0, 1) 100%
        );
        mask-image: linear-gradient(
            180deg,
            transparent 60%,
            rgba(0, 0, 0, 1) 100%
        );
        z-index: -1;
    }

      .crt {
            position: fixed;
            height: 100%;
            width: 100%;
            top:            0;
            left:           0;

            background:     repeating-linear-gradient(#0000001d, #0000001d 3px, #00000000 3px, #00000000 10px);
            pointer-events: none;

            animation:      scanlines-scroll 15s infinite linear;
            z-index:        1001;
        }

        @keyframes scanlines-scroll {
            0% {
            background-position: 0 0;
            }
            100% {
            background-position: 0 100px;
            }
        }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .loading-container {
        margin-top: 30vh;
    }

    .loading-img {
        width: clamp(7rem, 10vw, 15%);
    }
</style>
