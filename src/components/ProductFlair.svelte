<script lang="ts">
  import { emptyProduct, type ProductRecord } from '@/lib/products'
  export let product = emptyProduct as ProductRecord
  let isPdp = false
</script>

{#if product.flair && product.flair?.length > 0}
  <div class={`flex ${isPdp ? 'items-end' : 'items-start'} wrap gap-2 mb-4`}>
    {#each product.flair as flair}
      {#if flair.toLowerCase() === 'prime'}
        <img src="/prime.png" width="72" alt="Is Amazon Prime" />
      {:else}
        <div class="relative">
          <div class="relative overflow-hidden text-white whitespace-nowrap">
            <div
              class="holo"
              style={`--h: ${Math.max(0, Math.min(Math.round(product.title.length * 3.5), 100))}%`}
            />
            {flair}
          </div>
          <div class="absolute top-0 left-0 text-white scale-90">{flair}</div>
        </div>
      {/if}
    {/each}
  </div>
{/if}
