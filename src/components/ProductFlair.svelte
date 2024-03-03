<script lang="ts">
  import { emptyProduct } from '@/lib/emptyProduct.js'
  import { type ProductRecord } from '@/lib/products'
  export let product = emptyProduct as ProductRecord
  export let isPdp = false
</script>

{#if product.flair && product.flair?.length > 0}
  <div class={`flex ${isPdp ? 'items-end flex-shrink-0' : 'items-start'} flex-wrap gap-2 mb-4`}>
    {#each product.flair as flair}
      {#if flair.toLowerCase() === 'prime'}
        <img
          class="bg-white w-[66px] rounded-xl p-1 px-2 shadow-md"
          src="/prime.png"
          width="66"
          alt="Is Amazon Prime"
        />
      {:else}
        <div class="relative">
          <div
            class="relative overflow-hidden text-white whitespace-nowrap text-md shadow-md rounded-xl font-bold"
          >
            <div
              class="holo"
              style={`--h: ${Math.max(0, Math.min(Math.round(product.title.length * 3.5), 100))}%`}
            />
            {flair}
          </div>
          <div class="absolute top-0 left-0 text-white scale-[80%] font-bold">{flair}</div>
        </div>
      {/if}
    {/each}
  </div>
{/if}
