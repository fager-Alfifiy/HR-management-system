<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon } from '@lucide/svelte';
  let dark = $state(false);
  onMount(() => {
    dark = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.toggle('dark', dark);
  });
  function toggleTheme() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
</script>
<button
  type="button"
  onclick={toggleTheme}
  aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
  title={dark ? 'Light Mode' : 'Dark Mode'}
  class="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
>
  {#if dark}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>