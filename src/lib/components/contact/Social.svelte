<script lang="ts">
	// Images
	import SignalImg from "$lib/assets/images/contact/signal.png?enhanced";
	import DiscordImg from "$lib/assets/images/contact/discord.png?enhanced";
	import TwitterImg from "$lib/assets/images/contact/twitter.png?enhanced";
	import MailImg from "$lib/assets/images/contact/mail.webp?enhanced";
	import StarImg from "$lib/assets/images/star.gif";

	type SocialApp = "Discord" | "Signal" | "Twitter" | "Mail";
	type Props = {
		socialApp: SocialApp;
		name: string;
		linkText: string;
		link: string;
	}

	const { socialApp, name, linkText, link }: Props = $props();
</script>

<a href={link} class="container" target="_blank">
	<div class="container__img">
		{#if socialApp === "Discord"}
			<enhanced:img src={DiscordImg} alt="Discord icon" />
		{:else if socialApp === "Signal"}
			<enhanced:img src={SignalImg} alt="Signal icon" />
		{:else if socialApp == "Twitter"}
			<enhanced:img src={TwitterImg} alt="Twitter icon" />
		{:else if socialApp == "Mail"}
			<enhanced:img src={MailImg} alt="Email icon" />
		{/if}
	</div>

	<div class="container__text">
		<h2>{name}</h2>
		<h3>{linkText}</h3>
	</div>

	<img class="container__star" src={StarImg} alt="Mario Bros Star" />
</a>

<style>
	.container {
		position: relative;
	
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: stretch;
		gap: var(--padding-x);

		background: linear-gradient(transparent, var(--color-border)) center no-repeat;
		background-position: 0px 300px;
		padding: var(--padding-m) var(--padding-x);
		text-decoration: none;
	}
	.container:hover {
		background-position: 0px 0px;
	}
	.container:not(:last-child) {
		border-right: var(--border-width) solid var(--color-border);
	}

	.container__img {
		width: 3rem;
	}
	.container__img img {
		height: auto;
		width: 100%;
	}

	/* .container:hover .container__text * {
		color: var(--color-bg);
	} */

	.container__star {
		height: 3rem;
		width: auto;
		position: absolute;
		right: -1.5rem;
		top: -1.5rem;

		display: none;
	}
	.container:hover .container__star {
		display: block;
	}

	/* RESPONSIVE */
	@media screen and (max-width: 728px) {
		.container {
			width: 100%;
			gap: var(--padding-xl);
		}
		.container:not(:last-child) {
			border-bottom: var(--border-width) solid var(--color-border);
			border-right: none;
		}
	}
</style>