<!-- 
<script lang="ts">
  import { onMount } from 'svelte';
  import { Search, RefreshCw, UsersRound } from '@lucide/svelte';
  import EmployeeStats from '#lib/components/employees/EmployeeStats.svelte';
  import EmployeeTable from '#lib/components/employees/EmployeeTable.svelte';

  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
    department_id?: string | number;
    departmentId?: string | number;
    job_title?: string;
    status?: string;
  };

  type Department = {
    id: string | number;
    name: string;
  };

  let employees = $state<Employee[]>([]);
  let departments = $state<Department[]>([]);
  let search = $state('');
  let selectedDepartment = $state('');
  let loading = $state(true);
  let error = $state('');

  const API = 'http://localhost:3001';

  let filteredEmployees = $derived(
    employees.filter((employee) => {
      const fullName =
        `${employee.first_name} ${employee.last_name}`.toLowerCase();

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase());

      const departmentId =
        employee.departmentId ?? employee.department_id;

      const matchesDepartment =
        !selectedDepartment ||
        String(departmentId ?? '') === selectedDepartment;

      return matchesSearch && matchesDepartment;
    })
  );

  async function loadEmployees() {
    loading = true;
    error = '';

    try {
      const [employeesResponse, departmentsResponse] = await Promise.all([
        fetch(`${API}/employees`),
        fetch(`${API}/departments`)
      ]);

      if (!employeesResponse.ok || !departmentsResponse.ok) {
        throw new Error('Could not load employee data.');
      }

      employees = await employeesResponse.json();
      departments = await departmentsResponse.json();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Something went wrong.';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    void loadEmployees();
  });
</script>

<svelte:head>
  <title>Employee Management | HR Connect</title>
</svelte:head>

<div class="min-h-screen bg-[#FFF8F3] px-5 py-10 text-slate-900 dark:bg-slate-900 dark:text-white">
  <div class="mx-auto max-w-7xl space-y-8">

    <header>
      <p class="text-sm font-semibold text-[#C65D32]">
        HR MANAGEMENT
      </p>
      <h1 class="mt-2 flex items-center gap-3 text-3xl font-bold">
        <UsersRound class="text-[#C65D32]" size={30} />
        Employee Management
      </h1>
      <p class="mt-3 text-slate-500 dark:text-slate-300">
        View and manage employee records in one place.
      </p>
    </header>

    <EmployeeStats {employees} {departments} />

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">

      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold">Employee Directory</h2>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
            {filteredEmployees.length} employees found
          </p>
        </div>

        <button
          type="button"
          onclick={loadEmployees}
          disabled={loading}
          class="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium hover:bg-orange-50 disabled:opacity-50 dark:border-slate-600 dark:hover:bg-slate-700"
        >
          <RefreshCw size={17} class={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      <div class="mb-6 flex flex-wrap gap-3">
        <div class="relative min-w-[220px] flex-1">
          <Search
            size={18}
            class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            bind:value={search}
            placeholder="Search by name or email..."
            aria-label="Search employees"
            class="w-full rounded-xl border-slate-200 pl-11 text-sm dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <select
          bind:value={selectedDepartment}
          aria-label="Filter by department"
          class="rounded-xl border-slate-200 text-sm dark:border-slate-600 dark:bg-slate-700 dark:text-white"
        >
          <option value="">All Departments</option>
          {#each departments as department (department.id)}
            <option value={String(department.id)}>
              {department.name}
            </option>
          {/each}
        </select>
      </div>

      {#if error}
        <p role="alert" class="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {error} Please check JSON Server on port 3001.
        </p>
      {:else if loading}
        <p class="py-12 text-center text-slate-500">
          Loading employees...
        </p>
      {:else}
        <EmployeeTable employees={filteredEmployees} {departments} />
      {/if}
    </section>
  </div>
</div>
 -->