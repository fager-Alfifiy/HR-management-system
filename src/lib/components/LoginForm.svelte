
<script lang="ts">
  import { goto } from '$app/navigation';
  import { LogIn, UserRound } from '@lucide/svelte';

  let email = $state('');
  let password = $state('');
  let error = $state('');

  function login() {
    error = '';

    // Demo account only – not secure authentication
    if (email === 'hr@demo.com' && password === 'HRdemo123') {
      goto('/hr/dashboard');
    } else {
      error = 'Invalid demo email or password.';
    }
  }
</script>

<div class="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
  <UserRound size={36} class="mx-auto text-[#C65D32]" />

  <h1 class="mt-4 text-center text-2xl font-bold dark:text-white">
    Welcome Back
  </h1>

  <p class="mt-2 text-center text-sm text-slate-500 dark:text-slate-300">
    Sign in to HR Connect
  </p>

  <form onsubmit={(e) => { e.preventDefault(); login(); }} class="mt-8 space-y-5">
    <input
      type="email"
      bind:value={email}
      placeholder="Work Email"
      autocomplete="username"
      required
      class="w-full rounded-xl border-slate-200 dark:bg-slate-700 dark:text-white"
    />

    <input
      type="password"
      bind:value={password}
      placeholder="Password"
      autocomplete="current-password"
      required
      class="w-full rounded-xl border-slate-200 dark:bg-slate-700 dark:text-white"
    />

    {#if error}
      <p role="alert" class="text-sm text-red-600">{error}</p>
    {/if}

    <button
      type="submit"
      class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C65D32] py-3 font-semibold text-white hover:bg-[#A84B27]"
    >
      <LogIn size={19} />
      Sign In
    </button>
  </form>
</div>
