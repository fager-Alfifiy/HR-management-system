
<script lang="ts">
  import {
    LogIn,
    LayoutDashboard,
    ClipboardCheck,
    Bell
  } from '@lucide/svelte';
  const steps = [
    {
      icon: LogIn,
      title: 'Sign In',
      desc: 'Log in using your company account.'
    },
    {
      icon: LayoutDashboard,
      title: 'Access Dashboard',
      desc: 'View HR services based on your role.'
    },
    {
      icon: ClipboardCheck,
      title: 'Manage Requests',
      desc: 'Submit leave requests and access documents.'
    },
    {
      icon: Bell,
      title: 'Track Updates',
      desc: 'Follow request statuses and notifications.'
    }
  ];
</script>
<section
  id="workflow"
  class="scroll-mt-24 bg-[#FFF8F3] px-6 py-24 dark:bg-slate-900"
>
  <div class="mx-auto max-w-6xl text-center">

    <p class="font-semibold text-[#C65D32]">
      SIMPLE & EFFICIENT
    </p>
    <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
      How HR Connect Works
    </h1>
    <p class="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-300">
      Four simple steps to access and manage your HR services.
    </p>
    <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {#each steps as step, i}
        <div
          class="workflow-card rounded-2xl border border-transparent
                 bg-white p-7 text-left shadow-sm dark:bg-slate-800"
        >
          <div class="flex items-center justify-between">
            <step.icon size={30} class="text-[#C65D32]" />
            <span class="text-2xl font-bold text-orange-200">
              {i + 1}
            </span>
          </div>
          <h2 class="mt-6 text-lg font-bold text-slate-900 dark:text-white">
            {step.title}
          </h2>
          <p class="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-300">
            {step.desc}
          </p>  </div> {/each}</div></div></section>