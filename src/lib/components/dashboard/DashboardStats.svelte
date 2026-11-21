
<script lang="ts">
  import {
    UsersRound, Building, CalendarDays, Clock3
  } from '@lucide/svelte';

  let {
    employees = 0,
    departments = 0,
    pending = 0,
    attendance = 0
  } = $props();

  let stats = $derived([
    { title: 'Total Employees', value: employees, icon: UsersRound },
    { title: 'Departments', value: departments, icon: Building },
    { title: 'Pending Requests', value: pending, icon: CalendarDays },
    { title: 'Attendance Records', value: attendance, icon: Clock3 }
  ]);
</script>

<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {#each stats as stat}
    <div class="workflow-card rounded-2xl border border-orange-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <stat.icon size={28} class="text-[#C65D32]" />
      <p class="mt-4 text-sm text-slate-500 dark:text-slate-300">
        {stat.title}
      </p>
      <h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
        {stat.value}
      </h2>
    </div>
  {/each}
</div>
