<script lang="ts">
  import { navItems } from '@/lib/constants'
  export let active: string
</script>

<nav class={`fixed top-0 w-full flex justify-center z-30 transition-all backdrop-blur-xl shadow`}>
  <div
    class="flex h-16 max-w-screen-xl items-center justify-between w-full p-2 pl-[2px] sm:p-8 overflow-y-auto whitespace-nowrap gap-4"
  >
    <a href="/" class="flex items-center font-display text-2xl flex-shrink-0">
      <img alt="Cool Toy Bro Logo" class="block w-[65px]" src="/cooltoybro_lg.png" />
    </a>
    <div class="flex gap-4">
      {#each navItems as item, i}
        <a href={item.link} class={`${item.link === active ? 'underline' : ''} text-shadow`}
          >{item.title}</a
        >
      {/each}
    </div>
  </div>
</nav>
