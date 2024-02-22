<script lang="ts">
  import { emptyProduct, type ProductRecord } from '@/lib/products'
  import { Button } from '@/components/base/button'
  export let product = emptyProduct as ProductRecord
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto">
  <div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white max-h-[600px] overflow-scroll">
      {#if product.images.length > 1}
        {#each product.images as image, i}
          <div class="relative">
            <div class="flex flex-col items-center justify-center">
              <img src={image} alt={`${product.title} image ${i}`} />
            </div>
            <div class="absolute z-9 bottom-0 left-0">{i + 1} / {product.images.length}</div>
          </div>
        {/each}
      {/if}
    </div>
    <div class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <h1 class="text-6xl font-bold mb-2">{product.title}</h1>
      <p class="mb-4 text-2xl font-semibold">
        {product.cost
          .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
          .replace('.00', '')}
      </p>
      <p class="text-lg mb-4">{@html product.description}</p>
      <a target="_blank" href={product.link} class="w-full"
        ><Button class="w-full">Buy Now</Button></a
      >
    </div>
  </div>
  <div
    class={`${
      product.additionalInformation.length > 0 ? 'grid sm:grid-cols-2 gap-4 sm:gap-8' : ''
    }`}
  >
    <div class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <h2 class="text-3xl font-bold mb-2 mt-4">CQV Score</h2>
      <div class="my-4">
        <p class="flex justify-between text-xl font-bold">
          <span>(C)OST</span>
          {'💰'.repeat(product.rank.cost)}
        </p>
        <p class="flex justify-between text-xl font-bold">
          <span>(Q)UALITY</span>
          {'⭐'.repeat(product.rank.quality)}
        </p>
        <p class="flex justify-between text-xl font-bold">
          <span>(V)IBES</span>
          {'🧸'.repeat(product.rank.vibes)}
        </p>
      </div>
      <p>{@html product.rank.description}</p>
    </div>
    {#if product.additionalInformation.length > 0}
      <div class="flex flex-col justify-center w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
        {@html product.additionalInformation}
      </div>
    {/if}
  </div>
  <!-- @TODO related products -->
</div>
