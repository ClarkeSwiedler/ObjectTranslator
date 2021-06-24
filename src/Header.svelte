<script lang="ts">
  export let top: string;
  export let sub: string;
</script>

<header>
  <h1>{top}</h1>
	<h2>{sub}</h2>
</header>

<style>
  h1 {
		color: #6694cd;
		font-size: 3em;
		font-weight: 100;
		margin-bottom: 0;
	}
	
	h2 {
		color: #6694cd;
		font-weight: 200;
		margin-top: 2px;
	}
</style>