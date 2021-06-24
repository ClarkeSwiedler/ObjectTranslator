<script lang='ts'>
  import type Convertible from "./Convertible";
  import Languages from "./Languages";
  export let selection: Convertible;
</script>

<select bind:value={selection}>
  {#each Languages as lang}
    <option value={lang}>
      {lang.description}
    </option>
  {/each}
</select>

<style>
  select {
    margin-bottom: 12px;
  }
</style>