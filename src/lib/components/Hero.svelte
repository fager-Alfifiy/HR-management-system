<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
</script>
<section class="bg-[#FFF8F3] px-6 py-24 dark:bg-slate-900">
  <div class="mx-auto max-w-6xl text-center">
    <p class="font-semibold text-[#C65D32]">
      WELCOME TO HR CONNECT
    </p>
    <h1 class="mt-5 text-5xl font-bold text-slate-900 dark:text-white">
      Your Workplace,
      <span class="text-[#C65D32]">Simplified.</span>
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
      HR Connect is a centralized platform that simplifies
      employee services, leave requests, attendance,
      and HR management in one convenient workspace.
    </p>
    <a
      href="/login"
      class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C65D32] px-7 py-4 font-semibold text-white hover:bg-[#A84B27]"
    >
      Sign In
      <ArrowRight size={20} />
    </a>
  </div>
</section>