<script lang="ts">
  import { onMount } from 'svelte'
  import { collections } from '@/lib/constants'
  import UserDropdown from '@/components/UserDropdown.svelte'
  import { Button } from '@/components/base/button'
  import type { UserRecord } from 'firebase-admin/auth'
  export let user: UserRecord | null
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
      {#each collections as collection, i}
        <a href={collection.link}>{collection.title}</a>
      {/each}
      <!-- {#if user}
        <UserDropdown {user} />
      {:else}
        <Button href="/signin" variant="rounded">Sign In</Button>
      {/if} -->
    </div>
  </div>
</div>
