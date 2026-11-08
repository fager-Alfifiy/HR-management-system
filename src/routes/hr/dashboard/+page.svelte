<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import { UsersRound, Building2, CalendarDays, Clock3, Search } from '@lucide/svelte';
  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
  };
  let employees = $state<Employee[]>([]);
  let departments = $state<any[]>([]);
  let leaves = $state<any[]>([]);
  let attendance = $state<any[]>([]);
  let search = $state('');
  let loading = $state(true);
  let error = $state('');

  let filtered = $derived(
    employees.filter(e =>
      `${e.first_name} ${e.last_name} ${e.email}`
        .toLowerCase().includes(search.toLowerCase())
    ).slice(0, 6)
  );

  let stats = $derived([
    { label: 'Total Employees', value: employees.length, icon: UsersRound },
    { label: 'Departments', value: departments.length, icon: Building2 },
    { label: 'Pending Requests', value: leaves.filter(l => l.status?.toLowerCase() === 'pending').length, icon: CalendarDays },
    { label: 'Attendance Records', value: attendance.length, icon: Clock3 }
  ]);

  onMount(async () => {
    try {
      const names = ['employees', 'departments', 'leaveRequests', 'attendance'];
      const responses = await Promise.all(
        names.map(n => fetch(`http://localhost:3001/${n}`))
      );
      if (responses.some(r => !r.ok)) throw new Error();

      [employees, departments, leaves, attendance] =
        await Promise.all(responses.map(r => r.json()));
    } catch {
      error = 'Unable to load data. Check JSON Server.';
    } finally {
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>HR Dashboard | HR Connect</title>
</svelte:head>

<main class="min-h-screen bg-[#FFF8F3] p-6 text-slate-900 dark:bg-slate-900 dark:text-white">
  <div class="mx-auto max-w-7xl">

    <header class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-bold">HR Dashboard</h1>
        <p class="mt-2 text-slate-500 dark:text-slate-300">
          Employee information and HR activities
        </p>
      </div>
      <a href="/hr/employees" class="rounded-xl bg-[#C65D32] px-5 py-3 text-sm font-semibold text-white">
        Manage Employees
      </a>
    </header>

    {#if loading}
      <p>Loading dashboard...</p>
    {:else if error}
      <p role="alert" class="rounded-xl bg-red-50 p-4 text-red-600">{error}</p>
    {:else}

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {#each stats as stat}
          <div class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
            <stat.icon size={26} class="text-[#C65D32]" />
            <p class="mt-4 text-sm text-slate-500 dark:text-slate-300">{stat.label}</p>
            <h2 class="mt-2 text-3xl font-bold">{stat.value}</h2>
          </div>
        {/each}
      </div>

      <section class="mt-8 overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-xl font-bold">Employee Directory</h2>
          <a href="/hr/employees" class="font-semibold text-[#C65D32]">
            View All
          </a>
        </div>

        <div class="relative mb-6 max-w-md">
          <Search size={18} class="absolute left-3 top-3 text-slate-400" />
          <input
            bind:value={search}
            placeholder="Search employees..."
            aria-label="Search employees"
            class="w-full rounded-xl border border-slate-200 py-2.5 pl-10 text-sm dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th class="p-4">Employee</th>
                <th class="p-4">Email</th>
                <th class="p-4">ID</th>
              </tr>
            </thead>
            <tbody>
              {#each filtered as e (e.id)}
                <tr class="border-b border-slate-100 dark:border-slate-700">
                  <td class="p-4 font-semibold">{e.first_name} {e.last_name}</td>
                  <td class="p-4">{e.email}</td>
                  <td class="p-4">{e.id}</td>
                </tr>
              {/each}
            </tbody>
          </table>
          {#if filtered.length === 0}
            <p class="p-5 text-center text-slate-500">No employees found.</p>
          {/if}
        </div>
      </section>
    {/if}
  </div>
</main> -->