<script lang="ts">
  import { type ProductRecord } from '@/lib/products'
  import { Button } from '@/components/base/button'
  import ProductFlair from '@/components/ProductFlair.svelte'
  let products: ProductRecord[]
  let filter: string = ''
  let filteredProducts: ProductRecord[] = products
  let searchTerm = ''

  const searchProducts = () => {
    return (filteredProducts = products.filter((product) => {
      return JSON.stringify(product).includes(searchTerm.toLowerCase())
    }))
  }
  export { products, filter }
</script>

{#if products.length <= 0}
  <div class="sm:gap-8 p-4 sm:p-8 pb-0 max-w-screen-xl m-auto mt-16">
    <div class="w-full rounded-xl">
      <h1 class="text-3xl font-bold">
        No toys found {#if filter.length > 0}under "{filter}"{/if}
      </h1>
    </div>
  </div>
{/if}

{#if products.length > 0}
  <div class="p-4 sm:p-8 max-w-screen-xl m-auto mt-16">
    <h1 class="text-3xl font-bold mb-4">
      {#if filter.length > 0}{filter}{/if}{#if filter.length <= 0}All{/if} toys
    </h1>
    <div class="pb-4 sm:pb-8">
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={`Search ${filter || 'all'} toys`}
        bind:value={searchTerm}
        on:input={searchProducts}
      />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
      {#if filteredProducts.length == 0}
        <h2 class="text-2xl font-500">
          No results for "{searchTerm}"
        </h2>
      {/if}
      {#each filteredProducts as product, i}
        <div class="w-full rounded-xl shadow-lg bg-white card overflow-hidden">
          <div class="flex flex-col items-center justify-between h-full">
            <a href={`/product/${product.slug}`} class="w-full bg-white">
              <div class="p-4 w-full">
                <div class="relative w-full h-0 pb-[100%]">
                  <img
                    class="absolute w-full h-full object-contain"
                    src={product.images[0]}
                    alt={product.title}
                    loading={i > 3 ? 'lazy' : 'eager'}
                  />
                </div>
              </div>
            </a>
            <div class="p-4 w-full h-full flex flex-col justify-between">
              <a href={`/product/${product.slug}`} class="w-full">
                <h1 class="text-3xl font-bold mb-2">{product.title}</h1>
                <p class={`mb-4 ${product.salePrice ? 'strikethrough' : ''}`}>
                  {product.price
                    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                    .replace('.00', '')}
                </p>
                {#if product.salePrice}
                  <p class="mb-4 text-[red]">
                    {product.salePrice
                      .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                      .replace('.00', '')}
                  </p>
                {/if}
              </a>
              <ProductFlair {product} />
              <a target="_blank" href={product.links[0].link} class="w-full"
                ><Button class="w-full" variant="blue">Buy Now</Button></a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
