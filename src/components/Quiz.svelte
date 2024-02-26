<script lang="ts">
  import { tick } from 'svelte'
  import { type ProductRecord } from '@/lib/products'
  import { products } from '@/lib/products'
  import { Button } from '@/components/base/button'
  import Product from '@/components/Product.svelte'
  import { quiz } from '@/lib/constants'

  let rolled = 0
  let seen: string[] = []
  let chosenProduct = {} as ProductRecord
  let stepChoices = {} as any

  $: questionsLeft = quiz.length - Object.keys(stepChoices).length
  $: canRoll = questionsLeft === 0

  const setActiveStep = (stepId: string, stepOptionValue: string) => {
    stepChoices[stepId] = stepOptionValue
  }

  const rollProduct = async () => {
    if (seen.length >= 5 || rolled >= 5) {
      return
    }

    let filteredProducts = products.filter((p) => {
      return (
        Object.keys(stepChoices).filter((c) => JSON.stringify(p).includes(stepChoices[c])).length >
        2
      )
    })

    if (filteredProducts.length <= 0)
      filteredProducts = products.filter((p) => {
        return (
          Object.keys(stepChoices).filter((c) => JSON.stringify(p).includes(stepChoices[c]))
            .length > 1
        )
      })

    console.log(filteredProducts)

    const randomNumber = () =>
      Math.max(
        0,
        Math.min(Math.round(Math.random() * filteredProducts.length), filteredProducts.length),
      )

    let cachedProduct = filteredProducts[randomNumber()]

    if (
      !cachedProduct ||
      cachedProduct.slug === chosenProduct.slug ||
      seen.includes(cachedProduct.slug)
    ) {
      rolled += 1
      cachedProduct = filteredProducts[randomNumber()]
    }

    chosenProduct = cachedProduct
    if (!seen.includes(chosenProduct.slug)) seen.push(chosenProduct.slug)
    await tick()
    document.getElementById('product-wrapper')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
</script>

<div class="p-4 sm:p-8 max-w-screen-xl m-auto text-center w-full mt-20">
  <h1 class="text-6xl font-bold">Gift Finder</h1>
  <p class="text-xl mt-4">
    Just answer {quiz.length} simple questions, and we'll generate an amazing gift for you, or your bro!
  </p>
  <div class="flex flex-col md:flex-row wrap gap-6 m-auto text-center w-full justify-center mt-16">
    {#each quiz as step}
      <div class="text-center card rounded-xl shadow-lg p-4 sm:p-6">
        <h1 class="text-3xl font-bold mb-2 sm:mb-4">{step.title}</h1>
        <div class="flex flex-col rounded-xl bg-white">
          {#each step.options as stepOption}
            <div
              role="button"
              tabindex="0"
              class={`rounded-xl text-center p-4 sm:p-8 sm:text-xl font-semibold hover:z-10 hover:shadow-md ${
                stepChoices[step.id] === stepOption.value
                  ? 'bg-black text-white shadow-2xl relative z-10 hover:shadow-2xl'
                  : 'bg-white text-black hover:bg-gray-200'
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
  <div class="flex items-center justify-center mt-6 w-full text-2xl">
    <Button
      disabled={!canRoll}
      on:click={rollProduct}
      class="px-8 py-6"
      variant={!canRoll ? 'default' : 'wilson'}
      >{canRoll && chosenProduct.title
        ? 'Roll for a new product!'
        : canRoll
          ? 'Roll for a product!'
          : `Answer ${questionsLeft} questions, please`}</Button
    >
  </div>
</div>

{#if chosenProduct.title}
  <div class="flex items-center justify-center mt-6 w-full" id="product-wrapper">
    <Product product={chosenProduct} />
  </div>
{/if}
