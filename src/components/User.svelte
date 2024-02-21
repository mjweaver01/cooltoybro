<script lang="ts">
  import { Button } from '@/components/base/button'
  import type { UserRecord } from 'firebase-admin/auth'
  export let user: UserRecord
</script>

<div class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
  <div class="max-w-md w-full rounded-xl shadow-lg p-5 mt-16 bg-white">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold mb-4">Welcome, {user.displayName}!</h1>
      <p>We are happy to see you here. Ready to dive in?</p>
      <div class="mt-6 flex gap-4">
        <Button href="/account">Edit Your Account</Button>
        <Button variant="secondary" href="/tip">Tip Me</Button>
      </div>
    </div>
  </div>
</div>

<style>
  /* Just in case you want to add some extra styles */
</style>
