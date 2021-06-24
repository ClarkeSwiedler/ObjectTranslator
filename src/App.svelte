<script lang="ts">
	import Header from './Header.svelte'
	import Convert from './Convert.svelte'
</script>

<main>
	<Header top="Object Converter" sub="Converter for objects"/>
	<Convert/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>