<script lang="ts">
  import WordInput from './lib/WordInput.svelte';
  import { generateShares } from './lib/horcrux';

  let numWords = 24;
  let threshold = 2;
  let numShares = 3;
  let words: string[] = Array(numWords).fill('').map((_, i) => `word ${i + 1}`);
  let shares: string[][] = [];

  $: words = Array(numWords).fill('').map((_, i) => `word ${i + 1}`);

  function generateSecretShares() {
    shares = generateShares(words, threshold, numShares);
  }
</script>

<main class="min-h-screen p-6">
  <div class="max-w-7xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold text-center mb-8">Hocrux your mnemonic</h1>
    
    <div class="bg-surface p-6 rounded-lg shadow-xl">
      <WordInput
        bind:numWords
        bind:threshold
        bind:numShares
        bind:words
      />
      
      <div class="mt-6">
        <button
          class="button w-full"
          on:click={generateSecretShares}
        >
          Generate Shares
        </button>
      </div>
    </div>

    {#if shares.length > 0}
      <div class="bg-surface p-6 rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold mb-4">Generated Shares</h2>
        <div class="space-y-4">
          {#each shares as share, i}
            <div class="bg-background p-4 rounded-lg">
              <h3 class="font-bold mb-2">Share {i + 1}</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                {#each share as word, j}
                  {#if word}
                    <div class="bg-surface p-2 rounded">
                      <span class="font-mono">{words.indexOf(word) + 1}: {word}</span>
                    </div>
                  {/if}
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</main>