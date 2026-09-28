<script lang="ts">
    // Images
    import DiscordImg from "$lib/assets/images/icons/Discord.png?enhanced";
    import YouTubeImg from "$lib/assets/images/icons/Youtube.png?enhanced";
    import TwitterImg from "$lib/assets/images/icons/Twitter.png?enhanced";
    import KoFiImg from "$lib/assets/images/icons/Ko Fi.png?enhanced";

    type Props = {
        name: string;
        description: string;
        icon: "YouTube" | "Ko-Fi" | "Twitter" | "Discord";
        link: string;
    }

    const { name, description, icon, link }: Props = $props();
</script>

<a class="container" href={link}>
        <div class="container__icon">
            {#if icon === "Discord"}
                <enhanced:img src={DiscordImg} alt="Discord social icon" />
            {:else if icon === "YouTube"}
                <enhanced:img src={YouTubeImg} alt="YouTube social icon" />
            {:else if icon === "Twitter"}
                <enhanced:img src={TwitterImg} alt="Twitter social icon" />
            {:else if icon === "Ko-Fi"}
                <enhanced:img src={KoFiImg} alt="Ko-Fi social icon" />
            {/if}
        </div>
    
        <div class="container__text">
            <h2><b>{name}</b></h2>
            <p>{description}</p>
        </div>
</a>

<style>
    .container {
        height: 5.5rem;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--padding-m);

        background: linear-gradient(var(--color-bg), transparent) no-repeat;
        background-position: 0px -100px;
        border: var(--border-width) solid var(--color-bg);
        padding: var(--padding-m) var(--padding-x);
        text-align: right;
        text-decoration: none;
    }
    .container:hover {
        background-position: 0px 0px;

        box-shadow: 0px 0px 10px 0px var(--color-border);
        -webkit-box-shadow: 0px 0px 10px 0px var(--color-border);
        -moz-box-shadow: 0px 0px 10px 0px var(--color-border);
    }

    .container__icon {
        height: 100%;
    }

    .container__icon img {
        height: 100%;
        width: auto;
    }
</style>