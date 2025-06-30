<script lang="ts">
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>ERROR !!!</title>
</svelte:head>

<div class="error-container">
    <div class="error-message">
        <svg
            class="error-message-icon"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                ><g
                    fill="var(--color-accent)"
                    transform="translate(42.666667, 42.666667)"
                    ><path
                        d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z"
                        id="error"
                    ></path></g
                ></g
            ></svg
        >
        <h1 class="error-message-text">Error</h1>
    </div>
    <div class="error-info">
        <h1>{page.status}</h1>
        <h3>{page.error?.message}</h3>
    </div>
</div>

<style>
    .error-container {
        display: flex;
        justify-content: center;
    }

    .error-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--padding-m);
        background-color: var(--color-dark);
        padding: var(--padding-m);
    }

    .error-message-icon {
        width: 3rem;
    }

    .error-message-text {
        width: fit-content;
        text-align: center;
        writing-mode: vertical-lr;
    }

    .error-info {
        position: relative;
        width: 50%;
        border: var(--border-width) solid var(--color-border);
        border-left: none;
        padding: var(--padding-m);
    }
    .error-info::after {
        content: ":<";
        position: absolute;
        bottom: -1%;
        right: -1%;
        background-color: var(--color-bg);
    }
</style>
