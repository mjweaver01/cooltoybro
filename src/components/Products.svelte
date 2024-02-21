<script lang="ts">
  import { Button } from '@/components/base/button'
  import { products as saleProducts } from '@/lib/constants'
  export let products: ProductRecord[]
</script>

{#each products as product, i}
  <div class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
    <div class="max-w-md w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <div class="flex flex-col items-center justify-center">
        <!-- <img src={product.image} alt={product.title} />
        <h1 class="text-3xl font-bold mb-4">{product.title}</h1>
        <p>{product.cost}</p> -->
        <pre>{(JSON.stringify(product), i)}</pre>
      </div>
    </div>
  </div>
{/each}

{#if products.length <= 0}
  <div class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
    <div class="max-w-md w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold mb-4">Products</h1>
        <p>Shop our products now! You know you want to</p>

        {#each saleProducts as saleProduct, i}
          <div>hi</div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Just in case you want to add some extra styles */
</style>
