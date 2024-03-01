<script lang="ts">
  import { onMount } from 'svelte'
  import { emptyProduct } from '@/lib/emptyProduct'
  import { throttle } from '@/lib/helpers'
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

  onMount(() => {
    const wrapper = document.getElementById('product-images')
    const images = document.querySelectorAll('#product-images .product-image')
    const currentImage = document.getElementById('current-image')
    const dots = document.querySelectorAll('#dots .dot')

    if (wrapper) {
      wrapper.addEventListener(
        'scroll',
        throttle(() => {
          images.forEach((image, index) => {
            if (image.getBoundingClientRect().x < window.innerWidth / 2.25) {
              // @ts-ignore
              currentImage.innerHTML = index + 1
            }

            if (image.getBoundingClientRect().x < window.innerWidth / 2.25) {
              if (dots.item(index - 1)) dots.item(index - 1).classList.remove('active')
              if (dots.item(index + 1)) dots.item(index + 1).classList.remove('active')
              dots.item(index).classList.add('active')
            }
          })
        }, 10),
      )

      dots.forEach(function (dot, index) {
        dot.addEventListener('click', function (e) {
          wrapper.scrollTo({
            // @ts-ignore
            left: images.item(index).offsetLeft - 20,
            behavior: 'smooth',
          })
        })
      })
    }
  })
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto mt-16">
  <div class="grid sm:grid-cols-2 sm:gap-8">
    <div
      class={`w-full card rounded-xl shadow-lg !bg-white max-h-[55vh] ${
        product.images.length > 1 ? 'sm:max-h-[700px]' : 'sm:max-h-[592px]'
      } relative`}
    >
      <div id="product-images" class="w-full h-full overflow-hidden overflow-x-scroll no-scrollbar">
        <div class="p-4 whitespace-nowrap flex items-center flex-nowrap w-full h-full">
          {#each product.images as image, i}
            <div
              class="product-image relative flex items-center flex-nowrap w-full h-full shrink-0 pr-4"
            >
              <div class="relative w-full h-0 pb-[100%]">
                <img
                  class="absolute w-full h-full object-contain"
                  src={image}
                  alt={`${product.title} image ${i}`}
                  loading={i > 0 ? 'lazy' : 'eager'}
                />
              </div>
            </div>
          {/each}
          {#if product.videos && product.videos.length > 0}
            {#each product.videos as video, i}
              <div
                class="product-image relative flex items-center flex-nowrap w-full h-full shrink-0 pr-4"
              >
                <div class="video-container w-full">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video
                    class="w-full"
                    controls
                    preload="auto"
                    poster={video.poster}
                    src={video.link}
                  ></video>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>
      <div class="absolute left-0 bottom-0 w-full flex items-center justify-center">
        <div class="absolute right-[5px] bottom-[1px] image-count text-xs">
          <span id="current-image">1</span> /
          <span class="total-images">
            {totalImages}
          </span>
        </div>

        <div id="dots" class="w-full flex items-center justify-center gap-2 p-1">
          {#each Array(totalImages) as image, i}
            <div
              class={`dot text-center w-[9px] h-[9px] rounded-full ${i == 0 ? 'active' : ''} z-9`}
            />
          {/each}
        </div>
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
          <a
            target="_blank"
            href={link.link}
            class="w-full"
            on:click={() => trackConversion(product)}
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
        class="flex flex-col justify-center w-full rounded-xl shadow-lg p-4 mt-4 sm:mt-8 bg-white card"
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
