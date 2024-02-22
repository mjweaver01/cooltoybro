<script lang="ts">
  import { type ProductRecord } from '@/lib/constants'
  import { Button } from '@/components/base/button'
  let products: ProductRecord[]
  let filter: string = ''
  export { products, filter }
</script>

{#if products.length <= 0}
  <div class=" sm:gap-8 p-4 sm:p-8 max-w-screen-xl m-auto">
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <h1 class="text-3xl font-bold">
        No products found {#if filter.length > 0}under "{filter}"{/if}
      </h1>
    </div>
  </div>
{/if}

{#if products.length > 0}
  <div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 p-4 sm:p-8 max-w-screen-xl m-auto"
  >
    {#each products as product}
      <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
        <div class="flex flex-col items-center justify-center">
          <a href={`/product/${product.slug}`}>
            <img src={product.images[0]} alt={product.title} />
            <h1 class="text-3xl font-bold mb-2 mt-4">{product.title}</h1>
            <p class="mb-4">
              {product.cost
                .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                .replace('.00', '')}
            </p>
          </a>
          <a target="_blank" href={product.link} class="w-full"
            ><Button class="w-full">Buy Now</Button></a
          >
        </div>
      </div>
    {/each}
  </div>
{/if}
