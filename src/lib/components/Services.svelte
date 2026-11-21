
<script lang="ts">
  import {
    UsersRound, CalendarDays, Clock3,
    FolderOpen, ChartNoAxesCombined, Bell,
    ArrowRight
  } from '@lucide/svelte';
  const services = [
    {
      icon: UsersRound,
      title: 'Employee Management',
      desc: 'Manage employee information.',
      href: '/hr/employees'
    },
    {
      icon: CalendarDays,
      title: 'Leave Management',
      desc: 'Manage employee leave requests.'
    },
    {
      icon: Clock3,
      title: 'Attendance',
      desc: 'Track employee attendance.'
    },
    {
      icon: FolderOpen,
      title: 'Documents',
      desc: 'Access HR documents.'
    },
    {
      icon: ChartNoAxesCombined,
      title: 'HR Reports',
      desc: 'View reports and statistics.',
      href: '/hr/dashboard'
    },
    {
      icon: Bell,
      title: 'Notifications',
      desc: 'Stay updated with HR activities.'
    }
  ];
</script>

<section id="services" class="bg-[#FFF8F3] px-6 py-20 dark:bg-slate-900">
  <div class="mx-auto max-w-6xl">

    <div class="mb-12 text-center">
      <p class="font-semibold text-[#C65D32]">OUR SERVICES</p>
      <h1 class="mt-3 text-4xl font-bold dark:text-white">
        HR Services
      </h1>
      <p class="mt-4 text-slate-500 dark:text-slate-300">
        Explore HR Connect services.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each services as service}
        <div class="workflow-card rounded-2xl border border-transparent bg-white p-7 shadow-sm dark:bg-slate-800">
          <service.icon size={32} class="text-[#C65D32]" />

          <h2 class="mt-5 text-xl font-bold dark:text-white">
            {service.title}
          </h2>

          <p class="mt-3 text-sm text-slate-500 dark:text-slate-300">
            {service.desc}
          </p>

          {#if service.href}
            <a href={service.href}
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C65D32] hover:underline">
              Explore <ArrowRight size={17} />
            </a>
          {:else}
            <p class="mt-6 text-xs text-slate-400">
              Coming Soon
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
