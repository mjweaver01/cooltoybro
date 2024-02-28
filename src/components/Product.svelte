<script lang="ts">
  import { emptyProduct } from '@/lib/emptyProduct'
  import { type ProductRecord, products } from '@/lib/products'
  import { trackConversion } from '@/lib/analytics'
  import { Button } from '@/components/base/button'
  import Products from '@/components/Products.svelte'
  import ProductFlair from '@/components/ProductFlair.svelte'
  export let product = emptyProduct as ProductRecord
  const isPdp = true

  const totalImages = product.images.length + ((product.videos && product.videos?.length) || 0)

  const relatedProducts = products
    .filter((p) => product.relatedProducts?.find((rp) => JSON.stringify(p).includes(rp)))
    .filter((pr) => pr.slug !== product.slug)
    .slice(0, 4)
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto mt-16">
  <div class="grid sm:grid-cols-2 sm:gap-8">
    <div
      class={`w-full rounded-xl shadow-lg !bg-white max-h-[55vh] ${
        product.images.length > 1 ? 'sm:max-h-[700px]' : 'sm:max-h-[592px]'
      } overflow-hidden overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-auto card`}
    >
      <div
        class="p-4 whitespace-nowrap flex items-center sm:flex-col sm:gap-4 flex-nowrap w-full h-full"
      >
        {#each product.images as image, i}
          <div class="relative w-full h-full shrink-0 pr-4 sm:p-0">
            <div class="relative w-full h-0 pb-[100%]">
              <img
                class="absolute w-full h-full object-contain"
                src={image}
                alt={`${product.title} image ${i}`}
                loading={i > 0 ? 'lazy' : 'eager'}
              />
            </div>
            <div class="absolute z-9 top-0 left-1 text-xs">
              {i + 1} / {totalImages}
            </div>
          </div>
        {/each}
        {#if product.videos && product.videos.length > 0}
          {#each product.videos as video, i}
            <div class="relative w-full shrink-0 pr-4 sm:p-0">
              <div class="video-container w-full">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="w-full" controls preload="auto" poster={video.poster} src={video.link}
                ></video>
              </div>
              <div class="absolute top-0 left-0 text-xs text-white z-10">
                {i + 1 + product.images.length} / {totalImages}
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    <div
      class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-4 sm:mt-0 bg-white card"
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
          <a target="_blank" href={link.link} class="w-full" on:click={() => trackConversion()}
            ><Button class="w-full" variant={link.title}>Buy from {link.title}</Button></a
          >
        {/each}
      </div>
      <p class="mt-4">{@html product.description}</p>
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
  <Products
    products={[
      ...new Set(
        [
          ...products.filter((p) => p.collections.some((q) => product.collections.includes(q))),
          ...relatedProducts,
        ].filter((p) => p.slug !== product.slug),
      ),
    ]}
    showHeaderSort={false}
  />
  <!-- floating mobile buy buttons -->
  <!-- <div class="flex flex-wrap gap-2 fixed sm:hidden bottom-0 left-0 w-full p-4 sm:p-0 z-9">
    {#each product.links as link}
      <a target="_blank" href={link.link} class="w-full"
        ><Button class="w-full" variant={link.title}>Buy from {link.title}</Button></a
      >
    {/each}
  </div> -->
</div>
