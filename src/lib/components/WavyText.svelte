<script lang="ts">
    const { text = "", fadeIn = false, delay = 0.6 } = $props();

    let delaySum = 0;
    const addDelay = () => {
        delaySum += delay;
        return delaySum;
    };
</script>

{#each text as letter}
    <span class={`wavy ${fadeIn ? "appear" : ""}`} style={`animation-delay: ${addDelay()}s;`}>{letter}</span
    >
{/each}

<style>
    .wavy {
        position: relative;
        animation: wavyletter 2s infinite linear;
    }

    .appear {
        opacity: 0;
        animation: fadein .1s linear forwards;
    }

    @keyframes wavyletter {
        0%,
        100% {
            bottom: 0;
        }
        50% {
            bottom: 4px;
        }
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
