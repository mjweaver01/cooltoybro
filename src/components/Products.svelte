<script lang="ts">
  import { sortOptions } from '@/lib/constants'
  import { type ProductRecord } from '@/lib/products'
  import { trackConversion } from '@/lib/analytics'
  import { Button } from '@/components/base/button'
  import { Popover } from '@/components/base/popover'
  import ProductFlair from '@/components/ProductFlair.svelte'

  // @TODO grid vs list view

  let pop: any
  let products: ProductRecord[]
  let filter: string = ''
  let sortText = 'Sort'
  let sort: string = 'newest'
  let filteredProducts: ProductRecord[] = products
  let searchTerm = ''
  export let showHeaderSort = true

  const searchProducts = () => {
    filteredProducts = products
      .filter((product) => {
        return JSON.stringify(product).toLowerCase().includes(searchTerm.toLowerCase())
      })
      // @ts-ignore
      .sort((a: ProductRecord, b: ProductRecord) => {
        if (sort === 'newest') {
          return -1
        } else if (sort === 'oldest') {
          return 1
        } else if (sort === 'ztoa') {
          return b.title.localeCompare(a.title)
        } else if (sort === 'atoz') {
          return a.title.localeCompare(b.title)
        } else if (sort === 'low') {
          return a.price > b.price ? 1 : -1
        } else if (sort === 'high') {
          return b.price > a.price ? 1 : -1
        } else {
          return 0
        }
      })

    return filteredProducts
  }

  const doSort = async (option: any) => {
    sortText = option.title
    sort = option.value
    pop.closePopover()
    searchProducts()
  }

  // one time for the one time
  searchProducts()

  export { products, filter }
</script>

{#if products.length <= 0}
  <div class={`${showHeaderSort ? 'mt-16 p-4 sm:p-8' : ''} sm:gap-8 pb-0 max-w-screen-xl m-auto`}>
    <div class="w-full rounded-xl shadow-lg bg-white card overflow-hidden">
      <h1 class="text-3xl font-bold">
        No toys found {#if filter.length > 0}under "{filter}"{/if}
      </h1>
    </div>
  </div>
{/if}

{#if products.length > 0}
  <div
    class={`${
      showHeaderSort ? 'mt-16 p-4 sm:p-8' : 'mt-4 sm:mt-8'
    } sm:gap-8 pb-0 max-w-screen-xl m-auto`}
  >
    {#if showHeaderSort}
      <div class="w-full rounded-xl shadow-lg bg-white card p-4 mb-4 sm:mb-8 relative z-10">
        <h1 class="text-3xl font-bold mb-4">
          {#if filter.length > 0}{filter}{/if}{#if filter.length <= 0}All{/if} toys
        </h1>
        <div class="relative z-10 flex gap-4">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`Search all ${filter.toLowerCase() || 'all'} toys`}
            bind:value={searchTerm}
            on:input={searchProducts}
          />
          <Popover bind:this={pop}>
            <button
              class="flex gap-4 justify-between items-center bg-gray-50 border text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              slot="trigger"
              let:bindTrigger
              use:bindTrigger
            >
              {sortText}
              <xml version="1.0" encoding="iso-8859-1">
                <svg
                  fill="#000000"
                  height="18"
                  width="18"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M480.159,45.81H31.841C14.284,45.81,0,60.093,0,77.65v37.472c0,17.557,14.284,31.841,31.841,31.841h14.907L211.305,311.52
                      v144.056c0,4.293,2.586,8.163,6.552,9.806c1.313,0.543,2.692,0.808,4.059,0.808c2.763,0,5.478-1.078,7.508-3.109l68.559-68.56
                      c1.99-1.991,3.109-4.69,3.109-7.505v-75.498l164.554-164.555h14.514c17.557,0,31.841-14.284,31.841-31.841V77.65
                      C512,60.093,497.716,45.81,480.159,45.81z M282.968,299.621c-2.096,2.096-3.128,4.85-3.104,7.597v75.404l-47.332,47.332V307.156
                      c0.007-2.727-1.027-5.455-3.107-7.536L76.768,146.963h358.857L282.968,299.621z M490.773,115.122
                      c0,5.852-4.761,10.614-10.614,10.614H31.841c-5.852,0-10.614-4.761-10.614-10.614V77.65c0-5.852,4.761-10.614,10.614-10.614
                      h448.319c5.852,0,10.614,4.761,10.614,10.614V115.122z"
                      />
                    </g>
                  </g>
                </svg>
              </xml>
            </button>
            <div slot="content">
              {#each sortOptions as option}
                <Button
                  on:click={() => doSort(option)}
                  class={`${sort === option.value ? 'bg-gray-200' : ''}`}
                  variant={'ghost'}><p class="text-sm">{option.title}</p></Button
                >
              {/each}
            </div>
          </Popover>
        </div>
      </div>
    {/if}
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
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
                <h1 class="text-xl sm:text-3xl font-bold mb-2">{product.title}</h1>
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
                <ProductFlair {product} />
              </a>
              <a
                target="_blank"
                href={product.links[0].link}
                class="w-full"
                on:click={() => trackConversion()}
                ><Button class="w-full" variant={product.links[0].title}>Buy Now</Button></a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
