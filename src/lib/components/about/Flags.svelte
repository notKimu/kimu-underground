<script lang="ts">
	import TransFlag from "$lib/assets/images/trans_flag.webp";
	import DemiFlag from "$lib/assets/images/demi_flag.webp";
	import AutisticCreature from "$lib/assets/images/autistic_creature.webp";
</script>

<div>
    <div class="flag-entry">
        <div class="flag-image">
            <img src={TransFlag} alt="">
        </div>
        <p>Transgender</p>
    </div>
    
    <div class="flag-entry">
        <div class="flag-image">
            <img src={DemiFlag} alt="">
        </div>
        <p>Demisexual</p>
    </div>
    
    <div class="flag-entry">
        <div class="flag-image">
            <img src={AutisticCreature} alt="">
        </div>
        <p>Yipeee</p>
    </div>
</div>

<style>
    .flag-entry {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--padding-m);
        padding: var(--padding-m);
    }
    .flag-entry:not(:last-child) {
        border-bottom: var(--border-width) solid var(--color-border);
    }

    .flag-image {
        display: flex;
        justify-content: center;
        height: fit-content;
        width: 3rem;
    }
    .flag-image img{
        height: 2rem;
    }
</style>