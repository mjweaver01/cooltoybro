<script lang="ts">
  import { emptyProduct, type ProductRecord } from '@/lib/products'
  export let product = emptyProduct as ProductRecord
</script>

{#if product.flair && product.flair?.length > 0}
  <div class="flex wrap gap-4 mb-4">
    {#each product.flair as flair}
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
    {/each}
  </div>
{/if}
