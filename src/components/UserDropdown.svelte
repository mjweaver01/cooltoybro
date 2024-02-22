<script lang="ts">
  import { Popover } from '@/components/base/popover'
  import { Button } from '@/components/base/button'
</script>

<Popover>
  <button
    slot="trigger"
    let:bindTrigger
    use:bindTrigger
    class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none focus:ring-0 active:scale-95 sm:h-9 sm:w-9"
  >
    <img alt="Icon" width="15" height="15" src="/astro.svg" />
  </button>
  <div slot="content">
    <div class="p-2">
      <p class="truncate text-sm font-medium text-gray-900">Hi</p>
      <p class="truncate text-sm text-gray-500">Heya</p>
    </div>
    <Button href="/dashboard" variant="ghost">
      <p class="text-sm">Dashboard</p>
    </Button>

    <form action="/api/auth/signout">
      <Button type="submit" variant="ghost">
        <p class="text-sm">Sign out</p>
      </Button>
    </form>
  </div>
</Popover>
