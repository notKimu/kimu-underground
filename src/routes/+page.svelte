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

    <div class="vim-title">
        <p>index.md</p>
        <p>1,1</p>
        <p>All</p>
    </div>

    <div class="cards-container">
        <Cards
            icon={"<path d='M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' fill-rule='evenodd'/>"}
            name={$_("page.home.links.about")}
            link={"/about"}
			newtab={false}
        />
        <Cards
            icon={"<path d='M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z' fill-rule='evenodd'/>"}
            name={$_("page.home.links.projects")}
            link={"/projects"}
			newtab={false}
        />
        <Cards
            icon={"<path d='M 0,0 H 16 V 12 H 4 V 4 h 8 v 6 h 2 V 2 H 2 v 12 h 14 v 2 H 0 Z M 10,10 V 6 H 6 v 4 z'/>"}
            name={$_("page.home.links.contact")}
            link={"/contact"}
			newtab={false}
        />
        <Cards
            icon={"<path d='M 15.921648,5.9648307 C 15.405668,3.2409386 12.681776,2.902452 12.681776,2.902452 H 0.48225919 c -0.40398399,0 -0.45348203,0.531479 -0.45348203,0.531479 0,0 -0.05449784,4.8833065 -0.01349947,7.883188 0.10999565,1.613936 1.72393171,1.780429 1.72393171,1.780429 0,0 5.5102818,-0.0155 7.9761842,-0.0335 1.6254354,-0.283987 1.7894294,-1.711431 1.7704304,-2.4899 2.903885,0.161494 4.947804,-1.8879251 4.435324,-4.6093173 z M 8.5464399,8.3062379 C 7.7159728,9.2721997 5.8725458,10.954633 5.8725458,10.954633 c 0,0 -0.080497,0.0805 -0.2084918,0.0155 -0.049498,-0.0365 -0.069997,-0.06 -0.069997,-0.06 C 5.2965686,10.616146 3.3486457,8.8787153 2.9036633,8.2747392 2.432182,7.6312647 2.2111907,6.4753105 2.8441656,5.8008372 3.4766406,5.1288638 4.8465863,5.0768659 5.7525505,6.0713265 c 0,0 1.0414588,-1.187453 2.3124084,-0.6404747 1.2679498,0.5474784 1.2214517,2.0079205 0.481481,2.8753861 z m 4.1148371,0.3179875 c -0.619975,0.077997 -1.121956,0.017999 -1.121956,0.017999 v -3.78635 h 1.179454 c 0,0 1.315448,0.3674855 1.315448,1.7579304 0,1.2759494 -0.656474,1.7784295 -1.372446,2.0104204 z'/>"}
            name={$_("page.home.links.donate")}
            link={"https://ko-fi.com/notkimu"}
        />
        <Cards
            icon={"<path d='m 5.3383103,10.224412 c 0.8057324,-0.05279 1.4392268,-0.7193468 1.4392268,-1.5341444 0,-0.027195 -5.333e-4,-0.054391 -0.00213,-0.081586 v 0.00373 c 0.0016,-0.025596 0.00267,-0.055457 0.00267,-0.085852 0,-0.8131978 -0.6345609,-1.4776204 -1.4354941,-1.5261457 h -0.00427 c -0.8046686,0.043728 -1.440296,0.7065509 -1.440296,1.518149 0,0.033061 0.00107,0.065589 0.0032,0.098117 v -0.00427 c -0.0016,0.026662 -0.00267,0.058124 -0.00267,0.089585 0,0.8121313 0.6350942,1.4760211 1.4360274,1.5218801 h 0.00427 z m 5.3143147,0 c 0.805732,-0.05279 1.439226,-0.7193468 1.439226,-1.5341444 0,-0.027195 -5.33e-4,-0.054391 -0.0021,-0.081586 v 0.00373 c 0.0016,-0.025596 0.0027,-0.055457 0.0027,-0.085852 0,-0.8131978 -0.634561,-1.4776204 -1.435494,-1.5261457 h -0.0043 c -0.8046663,0.043726 -1.4402937,0.7065489 -1.4402937,1.518147 0,0.033061 0.00107,0.065589 0.0032,0.098117 v -0.00427 c -0.0016,0.025596 -0.00267,0.055458 -0.00267,0.085852 0,0.8131978 0.6345609,1.4776211 1.4354947,1.5261461 z M 2.458257,2.9200293 C 3.3983669,2.4763699 4.4904516,2.1254951 5.6337277,1.9223289 l 0.079453,-0.011731 c 0.00267,-5.333e-4 0.00587,-0.00107 0.00907,-0.00107 0.018663,0 0.034661,0.010132 0.043193,0.025062 v 0 C 5.8902229,2.153757 6.025667,2.4273114 6.14778,2.707798 l 0.02293,0.05919 C 6.7199518,2.679003 7.3534462,2.6288777 7.998672,2.6288777 c 0.6452258,0 1.2787202,0.050125 1.8967505,0.1466422 l -0.068789,-0.00907 C 9.9706049,2.4305109 10.108182,2.1574897 10.260157,1.8930005 l -0.02186,0.04106 c 0.0091,-0.015464 0.0256,-0.025062 0.04426,-0.025062 0.0027,0 0.0059,0 0.0085,5.333e-4 h -5.33e-4 c 1.222757,0.2148975 2.315375,0.5652391 3.336005,1.0435594 l -0.08052,-0.034128 c 0.0091,0.00373 0.01653,0.010132 0.02133,0.01813 v 0 C 15.089218,5.091934 16,7.7730872 16,10.667005 c 0,0.483653 -0.0256,0.960907 -0.07519,1.431228 l 0.0048,-0.05866 c -0.0016,0.01546 -0.0096,0.02826 -0.0208,0.03733 v 0 c -1.141143,0.853724 -2.467855,1.541609 -3.899617,1.993267 l -0.09385,0.0256 c -0.0043,0.0016 -0.0096,0.0021 -0.01493,0.0021 -0.01706,0 -0.03199,-0.008 -0.04106,-0.02026 v 0 C 11.574071,13.693701 11.30265,13.258573 11.067489,12.802115 l -0.02506,-0.05332 c -0.0032,-0.0064 -0.0053,-0.0144 -0.0053,-0.02293 0,-0.02186 0.01386,-0.03999 0.03306,-0.04746 h 5.33e-4 c 0.486319,-0.187702 0.897451,-0.387668 1.288852,-0.616963 l -0.04106,0.0224 c 0.01546,-0.0091 0.0256,-0.0256 0.0256,-0.04426 0,-0.01653 -0.008,-0.03146 -0.02026,-0.04053 v 0 c -0.08372,-0.06292 -0.167972,-0.127978 -0.247959,-0.1941 -0.0085,-0.0069 -0.01973,-0.0112 -0.03146,-0.0112 -0.0075,0 -0.0144,0.0016 -0.02026,0.0043 h 5.34e-4 c -1.17745,0.565765 -2.5596198,0.896376 -4.0185767,0.896376 -1.4589568,0 -2.8416597,-0.330612 -4.0755874,-0.920913 l 0.057057,0.02453 c -0.0064,-0.0032 -0.013331,-0.0048 -0.02133,-0.0048 -0.011731,0 -0.02293,0.0043 -0.031461,0.0112 v 0 c -0.079987,0.06612 -0.1637061,0.132244 -0.248492,0.194634 -0.012265,0.0096 -0.020263,0.02453 -0.020263,0.04106 0,0.01866 0.010132,0.03466 0.024529,0.04373 v 0 c 0.3524746,0.210631 0.7636061,0.410065 1.1918014,0.574837 l 0.055991,0.0192 c 0.019197,0.0075 0.033061,0.02613 0.033061,0.04746 0,0.0085 -0.00213,0.01653 -0.00587,0.02346 v -5.34e-4 C 4.6984128,13.260208 4.4275246,13.694802 4.1278413,14.107 l 0.02133,-0.0304 c -0.00907,0.0128 -0.024529,0.02133 -0.04106,0.02133 -0.00533,0 -0.010665,-0.0011 -0.015464,-0.0021 h 5.333e-4 C 2.5654391,13.620112 1.2360607,12.932228 0.05865689,12.052374 l 0.03466089,0.02506 c -0.01173138,-0.0085 -0.0191968,-0.02186 -0.02079653,-0.03679 v 0 C 0.02612898,11.622578 0,11.137327 0,10.646209 0,7.7586896 0.91291451,5.0844686 2.4651891,2.8960333 l -0.027729,0.041593 c 0.00427,-0.00853 0.011731,-0.015464 0.020263,-0.019197 v 0 z'/>"}
            name={$_("page.home.links.my-server")}
            link={"https://discord.gg/NfeXrQdXdE"}
        />
        <Cards
            icon={"<path d='m 14.054544,2.4061821 c 0,0 -1.930909,-0.2429091 -6.0778174,-0.2429091 -4.0123632,0 -6.0319994,0.2429091 -6.0319994,0.2429091 A 1.9454544,1.9454544 0 0 0 2.3778175e-8,4.3516365 V 11.649091 A 1.9454544,1.9454544 0 0 0 1.9447272,13.595272 c 0,0 1.877818,0.241455 6.0319994,0.241455 4.1519994,0 6.0778174,-0.241455 6.0778174,-0.241455 a 1.9439999,1.9439999 0 0 0 1.945455,-1.946181 V 4.3501819 A 1.9439999,1.9439999 0 0 0 14.054544,2.4061821 Z M 5.8625451,10.890545 V 5.1123637 l 5.1883629,2.8872725 z' style='stroke-width:0.727273'/>"}
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
            grid-template-columns: 1fr;
        }
    }
</style>
