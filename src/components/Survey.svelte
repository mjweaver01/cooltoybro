<script lang="ts">
  import { tick } from 'svelte'
  import { type ProductRecord } from '@/lib/products'
  import { products } from '@/lib/products'
  import { Button } from '@/components/base/button'
  import Product from '@/components/Product.svelte'
  import { survey } from '@/lib/constants'

  let chosenProduct = {} as ProductRecord
  $: chosenProduct

  const stepChoices = {} as any
  $: stepChoices

  const setActiveStep = (stepId: string, stepOptionValue: string) => {
    stepChoices[stepId] = stepOptionValue
  }

  const rollProduct = async () => {
    const filteredProducts = products.filter((p) => {
      return Object.keys(stepChoices).map((c) => JSON.stringify(p).includes(stepChoices[c]))
    })
    const randomNumber = Math.max(
      0,
      Math.min(
        Math.round((Math.random() * filteredProducts.length) / filteredProducts.length),
        filteredProducts.length,
      ),
    )

    chosenProduct = filteredProducts[randomNumber]
    await tick()
    document.getElementById('product-wrapper')?.scrollIntoView()
  }
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto text-center w-full mt-20">
  <h1 class="text-6xl font-bold">Gift your bro</h1>
  <div class="flex flex-col md:flex-row wrap gap-6 m-auto text-center w-full justify-center mt-16">
    {#each survey as step}
      <div class="text-center card rounded-xl shadow-lg p-4">
        <h1 class="text-3xl font-bold mb-2">{step.title}</h1>
        <div class="rounded overflow-hidden">
          {#each step.options as stepOption}
            <div
              role="button"
              tabindex="0"
              class={`text-center p-4 sm:p-8 ${
                stepChoices[step.id] === stepOption.value
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
              on:click={() => {
                setActiveStep(step.id, stepOption.value)
              }}
              on:keypress
            >
              {stepOption.title}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <div class="flex items-center justify-center mt-6 w-full">
    <Button disabled={Object.keys(stepChoices).length !== survey.length} on:click={rollProduct}
      >Roll {chosenProduct.title ? 'again' : 'for a product'}</Button
    >
  </div>
</div>

{#if chosenProduct.title}
  <div class="flex items-center justify-center mt-6 w-full" id="product-wrapper">
    <Product product={chosenProduct} />
  </div>
{/if}
