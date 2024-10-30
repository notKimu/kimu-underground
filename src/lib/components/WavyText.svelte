<script lang="ts">
  export let text: string = "";
  let delaySum = 0;
  const addDelay = () => {
    delaySum += 0.6;
    return delaySum;
  };
</script>

{#each text as letter}
  <span class="wavy" style={`animation-delay: ${addDelay()}s;`}>{letter}</span>
{/each}

<style>
  .wavy {
    position: relative;
    animation: wavyletter 2s infinite linear;
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
</style>
