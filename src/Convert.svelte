<script lang="ts">
import type Convertible from './Convertible';
import Languages from './Languages';

  import LanguageSelector from './LanguageSelector.svelte'
  let convertFrom: Convertible = Languages[0];
  let convertTo: Convertible = Languages[2];
  let toConvert: string = "";
  let converted: string = `{ Converted item }`;

  const handleConvertClick = () => {
    const inter = convertFrom.convertToJava(toConvert)
    converted = convertTo.convertFromJava(inter)
  }
</script>

<div>
  <div class="container">
    <div>
      <LanguageSelector bind:selection={convertFrom}/>
      <textarea placeholder="Item to convert" spellcheck="false" id="convertBox" bind:value={toConvert}/>
    </div>
    <button on:click="{() => handleConvertClick()}">Convert!</button>
    <div>
      <LanguageSelector bind:selection={convertTo}/>
      <div id ="codebox" class='codeContainer'>
        <code>
          {converted}
        </code>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .codeContainer {
    background-color: #252525;
    box-sizing: border-box;
    padding: 8px;
    margin-left: 24px;
    min-width: 350px;
    min-height: 400px;
    border-radius: 4px;
    text-align: start;
    box-shadow: 1px 1px 4px rgb(24, 24, 24);
  }

  code {
    display: block;
    white-space: pre-wrap;
  }

  button {
    height: 75px;
    min-width: 75px;
    background-color: #6694cd;
    color:#252525;
    border: none;
    border-radius: 2px;
    box-shadow: 1px 1px 4px rgb(24, 24, 24);
    cursor: pointer;
  }

  textarea {
    background-color: #252525;
    color: rgb(157, 157, 157);
    box-sizing: border-box;
    padding: 8px;
    margin-right: 24px;
    min-width: 350px;
    min-height: 400px;
    border-radius: 4px;
    text-align: start;
    display: block;
    border: none;
    box-shadow: 1px 1px 4px rgb(24, 24, 24);
  }

  textarea:focus {
    border-color: black;
  }

</style>