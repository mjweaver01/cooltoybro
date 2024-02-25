<script lang="ts">
  import { Button } from '@/components/base/button'
  import { Popover } from '@/components/base/popover'

  const isBrowser = typeof window !== 'undefined'

  const videos = [
    'church',
    'clouds',
    'dark',
    'horses',
    'ink',
    'lava',
    'mosque',
    'nebula',
    'neon',
    'poppies',
    'sakura',
    'screensaver',
    'tunnel',
    'waves',
  ]

  let selected = (isBrowser && localStorage.getItem('bg')) || 'clouds'

  const setVideo = (video: string) => {
    isBrowser && localStorage.setItem('bg', video)
    selected = video
    pop.closePopover()
  }

  let pop: any
</script>

<div class="max-w-xs flex items-center justify-center m-auto mt-4">
  <Popover bind:this={pop} position={'top'}>
    <button
      class="flex gap-4 justify-between items-center bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      slot="trigger"
      let:bindTrigger
      use:bindTrigger
    >
      <span class="capitalize">Video: {selected}</span>
    </button>
    <div slot="content">
      {#each videos as video}
        <Button
          on:click={() => setVideo(video)}
          class={`${video === selected ? 'bg-gray-200' : ''}`}
          variant={'ghost'}><p class="text-sm capitalize">{video}</p></Button
        >
      {/each}
    </div>
  </Popover>
</div>

<video src={`/videos/${selected}.mp4`} autoplay loop muted></video>

<style>
  video {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.35;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
