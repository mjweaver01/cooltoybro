<script lang="ts">
  import { emptyProduct, type ProductRecord, products } from '@/lib/products'
  import { Button } from '@/components/base/button'
  import Products from '@/components/Products.svelte'
  import ProductFlair from '@/components/ProductFlair.svelte'
  export let product = emptyProduct as ProductRecord
  const isPdp = true

  const relatedProducts = products
    .filter((p) => product.relatedProducts?.find((rp) => JSON.stringify(p).includes(rp)))
    .filter((pr) => pr.slug !== product.slug)
    .slice(0, 4)
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto mt-16">
  <div class="grid sm:grid-cols-2 sm:gap-8">
    <div
      class={`w-full rounded-xl shadow-lg bg-white max-h-[55vh] ${
        product.images.length > 1 ? 'sm:max-h-[700px]' : 'sm:max-h-[592px]'
      } overflow-scroll card`}
    >
      <div class="p-4 bg-white">
        {#each product.images as image, i}
          <div class="relative">
            <div class="relative w-full h-0 pb-[100%]">
              <img
                class="absolute w-full h-full object-contain"
                src={image}
                alt={`${product.title} image ${i}`}
                loading={i > 0 ? 'lazy' : 'eager'}
              />
            </div>
            <div class="absolute z-9 bottom-0 left-0 text-xs">
              {i + 1} / {product.images.length}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full rounded-xl shadow-lg p-5 mt-4 sm:mt-0 bg-white card"
    >
      <h1 class="text-4xl sm:text-6xl font-bold mb-2">{product.title}</h1>
      <div class="flex items-center justify-between w-full">
        <p class="mb-4 text-2xl font-semibold">
          {product.price
            .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            .replace('.00', '')}
        </p>
        <p class="flex justify-end w-full">
          <ProductFlair {product} {isPdp} />
        </p>
      </div>
      <div class="flex flex-col gap-2 w-full">
        {#each product.links as link}
          <a target="_blank" href={link.link} class="w-full"
            ><Button class="w-full" variant={link.title}>Buy from {link.title}</Button></a
          >
        {/each}
      </div>
      <p class="text-lg mt-4">{@html product.description}</p>
    </div>
  </div>
  <div
    class={`${
      product.additionalInformation.length > 0 ? 'grid sm:grid-cols-2 sm:gap-8' : ''
    } items-stretch`}
  >
    <div
      class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-4 sm:mt-8 bg-white z-9999 card"
    >
      <h2 class="text-3xl font-bold mx-2">CQV Score</h2>
      <div class="my-4">
        <p
          class="flex justify-between sm:mb-2 lg:mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          <span>(C)OST</span>
          {'💰'.repeat(product.rank.price)}
        </p>
        <p
          class="flex justify-between sm:mb-2 lg:mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          <span>(Q)UALITY</span>
          {'⭐'.repeat(product.rank.quality)}
        </p>
        <p
          class="flex justify-between sm:mb-2 lg:mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          <span>(V)IBES</span>
          {'😎'.repeat(product.rank.vibes)}
        </p>
      </div>
      <p>{@html product.rank.description}</p>
    </div>
    {#if product.additionalInformation.length > 0}
      <div
        class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-4 sm:mt-8 bg-white card"
      >
        {@html product.additionalInformation}
      </div>
    {/if}
  </div>
  {#if relatedProducts.length > 0}
    <Products products={relatedProducts} showHeaderSort={false} />
  {/if}
  <!-- floating mobile buy buttons -->
  <div class="flex flex-wrap gap-2 fixed sm:hidden bottom-0 left-0 w-full p-4 sm:p-0 z-9">
    {#each product.links as link}
      <a target="_blank" href={link.link} class="w-full"
        ><Button class="w-full" variant={link.title}>Buy from {link.title}</Button></a
      >
    {/each}
  </div>
</div>
