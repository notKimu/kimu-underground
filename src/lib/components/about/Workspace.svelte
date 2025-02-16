<script lang="ts">
    import WorkstationImg from "$lib/assets/images/workspace/workstation.webp?enhanced";
  import Separator from "../Separator.svelte";
</script>

<div class="about-workspace">
    <div class="workspace-laptop">
        <enhanced:img src={WorkstationImg} alt="A laptop with a Linux worspace" />
    </div>

    <Separator margin={false} />

    <div class="worspace-info">
        <span class="workspace-info__line"><h3>System:</h3><p>Artix Linux</p></span>
        <span class="workspace-info__line"><h3>Desktop:</h3><p>KDE</p></span>
    </div>
</div>

<style>
    .about-workspace {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--padding-m);
    }

    .workspace-laptop {
        width: 50%;
        display: flex;
        justify-content: center;
    }
    .workspace-laptop img {
        height: auto;
        width: 100%;
    }

    .workspace-info__line {
        display: flex;
        align-items: center;
        gap: var(--padding-m);
    }
</style>