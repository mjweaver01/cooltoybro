<script lang="ts">
  import { onMount } from 'svelte'
  import { navItems } from '@/lib/constants'
  let scrolled = false

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.pageYOffset > 0
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
</script>

<div
  class={`fixed top-0 w-full flex justify-center z-30 transition-all ${
    scrolled ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl' : 'bg-white/0'
  }`}
>
  <div class="flex h-16 max-w-screen-xl items-center justify-between w-full p-4 sm:p-8">
    <a href="/" class="flex items-center font-display text-2xl">
      <p class="font-bold">Cool Toy, Bro! 🧸</p>
    </a>
    <div class="flex gap-4">
      {#each navItems as item, i}
        <a href={item.link}>{item.title}</a>
      {/each}
    </div>
  </div>
</div>
