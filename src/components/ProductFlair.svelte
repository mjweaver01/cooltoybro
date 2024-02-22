<script lang="ts">
  import { emptyProduct, type ProductRecord } from '@/lib/products'
  export let product = emptyProduct as ProductRecord
</script>

{#if product.flair && product.flair?.length > 0}
  <div class="flex wrap gap-4 w-full mb-4">
    {#each product.flair as flair}
      <div class="relative">
        <div class="relative overflow-hidden">
          <div class="holo" style={`--h: ${Math.round(Math.random() * (100 - 0) + 0)}%`} />
          {flair}
        </div>
        <div class="absolute top-0 left-0 text-white scale-90">{flair}</div>
      </div>
    {/each}
  </div>
{/if}
