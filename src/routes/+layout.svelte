<script lang="ts">
	import "$lib/i18n";
	import { onMount } from "svelte";
	import { isLoading, locale } from "svelte-i18n";
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	import '../tooltip.css';
	// Images
	import GuraSpin from "$lib/images/gawr-spin.gif";

	onMount(() => {
		const savedLocale = localStorage.getItem("locale");
		if (savedLocale) locale.set(savedLocale);
	})
</script>

<div id="app">
	{#if $isLoading}
	 <center class="loading-container">
		 <img class="loading-img" src={GuraSpin} alt="">
		 <h1>...</h1>
	 </center>
	{:else}
		<Header />
		<Sidebar />
		<main>
			<slot />
		</main>
	{/if}
</div>

<style>
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