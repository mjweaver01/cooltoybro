<script lang="ts">
  import { type ProductRecord } from '@/lib/products'
  import { Button } from '@/components/base/button'
  import ProductFlair from '@/components/ProductFlair.svelte'
  let products: ProductRecord[]
  let filter: string = ''
  export { products, filter }
</script>

{#if products.length <= 0}
  <div class=" sm:gap-8 p-4 sm:p-8 max-w-screen-xl m-auto">
    <div class="w-full rounded-xl mt-16">
      <h1 class="text-3xl font-bold">
        No toys found {#if filter.length > 0}under "{filter}"{/if}
      </h1>
    </div>
  </div>
{/if}

{#if products.length > 0}
  <div class="p-4 sm:p-8 max-w-screen-xl m-auto mt-16">
    <h1 class="text-3xl font-bold mb-4 sm:mb-8">
      {#if filter.length > 0}{filter}{/if}{#if filter.length <= 0}All{/if} toys
    </h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
      {#each products as product, i}
        <div class="w-full rounded-xl shadow-lg p-5 bg-white card">
          <div class="flex flex-col items-center justify-between h-full">
            <a href={`/product/${product.slug}`} class="w-full">
              <div class="relative w-full h-0 pb-[100%] bg-white">
                <img
                  class="absolute w-full h-full object-contain"
                  src={product.images[0]}
                  alt={product.title}
                  loading={i > 3 ? 'lazy' : 'eager'}
                />
              </div>
            </a>
            <div class="pt-6 w-full h-full flex flex-col justify-between">
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
