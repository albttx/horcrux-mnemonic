<script lang="ts">
  export let numWords: number = 24;
  export let threshold: number = 2;
  export let numShares: number = 3;
  export let words: string[] = Array(numWords).fill('').map((_, i) => `word ${i + 1}`);

  $: {
    // Update words array when numWords changes
    if (words.length !== numWords) {
      words = Array(numWords).fill('').map((_, i) => `word ${i + 1}`);
    }
  }
</script>

<div class="space-y-6">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label for="numWords" class="block text-sm font-medium mb-2">Number of Words</label>
      <input
        type="number"
        id="numWords"
        bind:value={numWords}
        min="1"
        class="input w-full"
      />
    </div>
    <div>
      <label for="threshold" class="block text-sm font-medium mb-2">Threshold</label>
      <input
        type="number"
        id="threshold"
        bind:value={threshold}
        min="2"
        max={numShares}
        class="input w-full"
      />
    </div>
    <div>
      <label for="numShares" class="block text-sm font-medium mb-2">Total Shares</label>
      <input
        type="number"
        id="numShares"
        bind:value={numShares}
        min={threshold}
        class="input w-full"
      />
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each words as word, i}
      <div class="bg-surface p-4 rounded-lg">
        <input
          type="text"
          bind:value={words[i]}
          placeholder={`word ${i + 1}`}
          class="input w-full bg-background"
        />
      </div>
    {/each}
  </div>
</div>