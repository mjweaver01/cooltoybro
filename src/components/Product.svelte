<script lang="ts">
  import { emptyProduct, type ProductRecord, products } from '@/lib/constants'
  import { Button } from '@/components/base/button'
  export let product = emptyProduct as ProductRecord
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto">
  <div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <div class="flex flex-col items-center justify-center">
        <img src={product.images[0]} alt={product.title} />
      </div>
    </div>
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      <h1 class="text-6xl font-bold mb-2">{product.title}</h1>
      <p class="mb-4 text-2xl font-semibold">
        {product.cost
          .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
          .replace('.00', '')}
      </p>
      <p class="text-lg mb-4">{@html product.description}</p>
      <Button class="w-full">Add To Cart</Button>
      <!-- TODO -->
      <form method="GET" action="https://www.amazon.com/gp/aws/cart/add.html">
        <input type="hidden" name="AssociateTag" value="Associate Tag" /><br />
        <p>
          One Product<br />
          ASIN:<input type="text" name="ASIN.1" /><br />
          Quantity:<input type="text" name="Quantity.1" /><br />
        </p>
        <p>
          Another Product<br />
          ASIN:<input type="text" name="ASIN.2" /><br />
          Quantity:<input type="text" name="Quantity.2" /><br />
        </p>
        <input type="submit" name="add" value="add" />
      </form>
    </div>
  </div>
  {#if product.additionalInformation.length > 0}
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      {product.additionalInformation}
    </div>
  {/if}
  {#if product.images.length > 1}
    <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
      {product.images.map((image) => {})}
    </div>
  {/if}
  <div class="w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
    <h2 class="text-3xl font-bold mb-2 mt-4">CQS SCORE</h2>
    <div class="my-4">
      <p class="text-xl font-bold">{product.rank.cost} <span>(C)OST</span></p>
      <p class="text-xl font-bold">{product.rank.quality} <span>(Q)UALITY</span></p>
      <p class="text-xl font-bold">{product.rank.swag} <span>(S)WAG</span></p>
    </div>
    <p>{@html product.rank.description}</p>
  </div>
</div>
