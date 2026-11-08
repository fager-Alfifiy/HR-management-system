
<script lang="ts">
  import { BriefcaseBusiness, Menu, X, LogIn } from '@lucide/svelte';
  import ThemeToggle from '#lib/components/ThemeToggle.svelte';
  let menuOpen = $state(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/workflow' },
  { name: 'About Us', href: '/about' },
    { name: 'Portals', href: '/portals' }
  ];
</script>
<nav class="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
  <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
    <a href="/" class="flex items-center gap-2">
      <BriefcaseBusiness size={26} class="text-[#C65D32]" />
      <span class="text-xl font-bold text-slate-900 dark:text-white">
        HR<span class="text-[#C65D32]">Connect</span>
      </span>
    </a>
    <div class="hidden items-center gap-6 lg:flex">
      {#each links as link}
        <a href={link.href}
          class="text-sm font-medium text-slate-600 hover:text-[#C65D32] dark:text-slate-200">
          {link.name}
        </a>
      {/each}
    </div>
    <div class="flex items-center gap-3">
      <ThemeToggle />
      <a href="/login"
        class="hidden items-center gap-2 rounded-xl bg-[#C65D32] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#A84B27] sm:inline-flex">
        <LogIn size={17} />
        Login
      </a>
      <button
        type="button"
        class="rounded-lg p-2 text-slate-700 dark:text-white lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        {#if menuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>
  {#if menuOpen}
    <div class="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900 lg:hidden">
      {#each links as link}
        <a href={link.href}
          onclick={() => (menuOpen = false)}
          class="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-orange-50 dark:text-white dark:hover:bg-slate-800">
          {link.name}
        </a>
      {/each}

      <a href="/login"
        onclick={() => (menuOpen = false)}
        class="mt-2 block rounded-lg bg-[#C65D32] px-3 py-3 text-center text-sm font-semibold text-white">
        Login
      </a>
    </div>
  {/if}
</nav>
