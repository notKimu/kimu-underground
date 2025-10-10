<script lang="ts">
	import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
	import Social from "$lib/components/contact/Social.svelte";
</script>

<svelte:head>z
    <title>{$_("page.contact.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.contact.title")}</h1>

<Separator />

<div class="container">
	<Social socialApp={"Mail"} name={"Email"} linkText={"Kimumail"} link={"mailto:notkimu@proton.me"} />
	<Social socialApp={"Signal"} name={"Signal"} linkText={"notkimu.01"} link={"https://signal.me/#eu/hOPAuM89TYNjvRwD05569EYR-HuO4oCo06ZyOYjtgCWn-mM-QqtBH5hSSF8cv0Sc"} />
	<Social socialApp={"Discord"} name={"Discord"} linkText={"Net Cafe"} link={"https://discord.gg/NfeXrQdXdE"} />
	<Social socialApp={"Twitter"} name={"Twitter"} linkText={"Kimu 🍃"} link={"https://twitter.com/notkimu"} />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--padding-m);
	}

	@media screen and (max-width: 728px) {
		.container {
			flex-direction: column;
		}
	}
</style>