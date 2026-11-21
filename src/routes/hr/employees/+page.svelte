
<script lang="ts">
  import { onMount } from 'svelte';
  import { Plus, Search, UsersRound } from '@lucide/svelte';
  import EmployeeForm from '#lib/components/employees/EmployeeForm.svelte';
  import EmployeeTable from '#lib/components/employees/EmployeeTable.svelte';

  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type EmployeeInput = Omit<Employee, 'id'>;

  const API = 'http://localhost:3001/employees';

  let employees = $state<Employee[]>([]);
  let search = $state('');
  let editing = $state<Employee | null>(null);
  let showForm = $state(false);
  let saving = $state(false);
  let loading = $state(true);
  let error = $state('');

  let filtered = $derived(
    employees.filter(e =>
      `${e.first_name} ${e.last_name} ${e.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );

  async function loadEmployees() {
    loading = true;
    error = '';

    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error();

      employees = await response.json();
    } catch {
      error = 'Unable to load employees.';
    } finally {
      loading = false;
    }
  }

  async function saveEmployee(data: EmployeeInput) {
    saving = true;
    error = '';

    try {
      const url = editing
        ? `${API}/${encodeURIComponent(String(editing.id))}`
        : API;

      const response = await fetch(url, {
        method: editing ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error();

      showForm = false;
      editing = null;
      await loadEmployees();
    } catch {
      error = 'Unable to save employee.';
    } finally {
      saving = false;
    }
  }

  onMount(() => {
    void loadEmployees();
  });
</script>

<svelte:head>
  <title>Employees | HR Connect</title>
</svelte:head>

<main class="min-h-screen bg-[#FFF8F3] p-6 dark:bg-slate-900">
  <div class="mx-auto max-w-6xl space-y-6">

    <header class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="flex items-center gap-3 text-3xl font-bold dark:text-white">
          <UsersRound class="text-[#C65D32]" />
          Employee Management
        </h1>
        <p class="mt-2 text-slate-500 dark:text-slate-300">
          Total Employees: {employees.length}
        </p>
      </div>

      <button
        type="button"
        onclick={() => {
          editing = null;
          showForm = true;
        }}
        class="flex items-center gap-2 rounded-xl bg-[#C65D32] px-5 py-3 text-white"
      >
        <Plus size={19} />
        Add Employee
      </button>
    </header>

    {#if error}
      <p role="alert" class="rounded-xl bg-red-50 p-4 text-red-700">
        {error}
      </p>
    {/if}

    {#if showForm}
      {#key editing?.id ?? 'new'}
        <EmployeeForm
          employee={editing}
          {saving}
          onSave={saveEmployee}
          onCancel={() => (showForm = false)}
        />
      {/key}
    {/if}

    <div class="relative">
      <Search size={19} class="absolute left-4 top-3 text-slate-400" />
      <input
        bind:value={search}
        placeholder="Search employees..."
        aria-label="Search employees"
        class="w-full rounded-xl border-slate-200 py-3 pl-12 dark:bg-slate-800 dark:text-white"
      />
    </div>

    {#if loading}
      <p class="dark:text-white">Loading employees...</p>
    {:else}
      <EmployeeTable
        employees={filtered}
        onEdit={(employee) => {
          editing = employee;
          showForm = true;
        }}
      />
    {/if}

  </div>
</main>