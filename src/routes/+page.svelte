<script lang="ts">
	import { _ } from "svelte-i18n";
	import WavyText from "$lib/components/WavyText.svelte";
	import Separator from "$lib/components/Separator.svelte";
</script>

<svelte:head>
	<title>Kimu's Underground</title>
</svelte:head>

<h1 class="title">
	<WavyText text="Kimu's Underground" />
</h1>

<Separator />

<p>{@html $_('page.home.body')}</p>