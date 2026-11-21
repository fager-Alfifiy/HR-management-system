
<script lang="ts">
  import { onMount } from 'svelte';
  import { UsersRound, RefreshCw } from '@lucide/svelte';
  import DashboardStats from '#lib/components/dashboard/DashboardStats.svelte';

  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type LeaveRequest = { status?: string };

  let employees = $state<Employee[]>([]);
  let departments = $state<unknown[]>([]);
  let leaves = $state<LeaveRequest[]>([]);
  let attendance = $state<unknown[]>([]);
  let loading = $state(true);
  let error = $state('');

  let pending = $derived(
    leaves.filter(l => l.status?.toLowerCase() === 'pending').length
  );

  async function loadDashboard() {
    loading = true;
    error = '';

    try {
      const endpoints = [
        'employees', 'departments', 'leaveRequests', 'attendance'
      ];

      const responses = await Promise.all(
        endpoints.map(name => fetch(`http://localhost:3001/${name}`))
      );

      if (responses.some(r => !r.ok)) throw new Error();

      [employees, departments, leaves, attendance] =
        await Promise.all(responses.map(r => r.json()));
    } catch {
      error = 'Unable to load data. Check JSON Server.';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    void loadDashboard();
  });
</script>

<svelte:head>
  <title>HR Dashboard | HR Connect</title>
</svelte:head>

<main class="min-h-screen bg-[#FFF8F3] px-6 py-12 dark:bg-slate-900">
  <div class="mx-auto max-w-7xl">

    <header class="mb-10 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="font-semibold text-[#C65D32]">HR WORKSPACE</p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          HR Dashboard
        </h1>
        <p class="mt-2 text-slate-500 dark:text-slate-300">
          Manage and monitor HR activities.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          type="button"
          onclick={loadDashboard}
          disabled={loading}
          class="rounded-xl border border-orange-200 p-3 text-[#C65D32] disabled:opacity-50"
          aria-label="Refresh dashboard"
        >
          <RefreshCw size={20} />
        </button>

        <a href="/hr/employees"
          class="flex items-center gap-2 rounded-xl bg-[#C65D32] px-5 py-3 font-semibold text-white">
          <UsersRound size={19} />
          Employees
        </a>

<a
  href="/hr/leaves"
  class="inline-flex items-center rounded-xl bg-[#C65D32] px-5 py-3 font-semibold text-white"
>
  Leave Management
</a>

      </div>
    </header>

    {#if loading}
      <p class="dark:text-white">Loading dashboard...</p>
    {:else if error}
      <p role="alert" class="rounded-xl bg-red-50 p-5 text-red-700">
        {error}
      </p>
    {:else}
      <DashboardStats
        employees={employees.length}
        departments={departments.length}
        {pending}
        attendance={attendance.length}
      />

      <section class="mt-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <h2 class="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Recent Employees
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm dark:text-white">
            <thead class="border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="p-3">Name</th>
                <th class="p-3">Email</th>
                <th class="p-3">ID</th>
              </tr>
            </thead>

            <tbody>
              {#each employees.slice(-5).reverse() as e (e.id)}
                <tr class="border-b border-slate-100 dark:border-slate-700">
                  <td class="p-3">{e.first_name} {e.last_name}</td>
                  <td class="p-3">{e.email}</td>
                  <td class="p-3">{e.id}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    {/if}

  </div>
</main>
