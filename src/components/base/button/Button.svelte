<script lang="ts">
  // Define a type for the variant keys
  type ButtonVariant = keyof typeof buttonVariants
  let className: string | undefined | null
  export { className as class }
  export let href: string | undefined = null
  export let type: 'button' | 'submit' | 'reset' = 'button'
  // Ensure that variant is of type ButtonVariant
  export let variant: ButtonVariant | any = 'default'
  const computedVariant = variant.toLowerCase().replace(/' '/g, '_')

  const buttonVariants: any = {
    amazon:
      'flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none py-2 px-4 rounded-md text-white bg-orange-600 hover:bg-orange-500/80 focus:outline-none focus:ring-2 transition duration-200 ease-in-out',
    flipper:
      'flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none py-2 px-4 rounded-md text-white bg-orange-600 hover:bg-orange-500/80 focus:outline-none focus:ring-2 transition duration-200 ease-in-out',
    raspberry_pi:
      'flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none py-2 px-4 rounded-md text-white bg-rose-600 hover:bg-orange-500/80 focus:outline-none focus:ring-2 transition duration-200 ease-in-out',
    google:
      'disabled:opacity-50 disabled:pointer-events-none group relative w-full flex justify-center items-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    outlined:
      'py-2 px-4 rounded-md border border-gray-300 text-black bg-white hover:bg-gray-50 transition duration-200 ease-in-out',
    ghost:
      'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100',
    rounded:
      'rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white hover:bg-black/80 transition duration-200 ease-in-out ',
    secondary:
      'py-2 px-4 rounded-md border border-green-300 text-green-700 bg-green-200 hover:bg-green-100 transition duration-200 ease-in-out',
    wilson:
      'py-2 px-4 rounded-md border border-red-300 text-white bg-red-600 hover:bg-red-200 hover:text-red-600 transition duration-200 ease-in-out',
    default:
      'flex justify-center items-center disabled:opacity-30 disabled:pointer-events-none py-2 px-4 rounded-md text-white bg-black hover:bg-black/80 focus:outline-none focus:ring-2 transition duration-200 ease-in-out',
  }

  const variantClass = buttonVariants[computedVariant] || buttonVariants.default

  // This function returns true if 'href' is a non-empty string
  const isLink = (): boolean => typeof href === 'string' && href.length > 0
</script>

<!--
  * When 'href' is defined, we render an <a> element instead of a <button>.
  This is important for accessibility because screen readers and other
  assistive technologies use the semantic information of HTML elements
  to convey their function to users. An <a> element signifies a hyperlink
  that navigates the user to a new page or resource, while a <button>
  indicates an action or command that the user can perform on the current page.
-->
{#if isLink()}
  <a
    {...$$restProps}
    {href}
    class="text-center {variantClass} {className}"
    on:click
    {type}
    role="button"
    tabindex="0"
  >
    <slot />
  </a>
{:else}
  <button on:click {...$$restProps} {type} class="{variantClass} {className}">
    <slot />
  </button>
{/if}
