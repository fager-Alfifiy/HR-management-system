
<script lang="ts">
  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
  };

  let {
    employee = null,
    saving = false,
    onSave,
    onCancel
  }: {
    employee?: Employee | null;
    saving?: boolean;
    onSave: (data: Omit<Employee, 'id'>) => void;
    onCancel: () => void;
  } = $props();

  let first_name = $state(employee?.first_name ?? '');
  let last_name = $state(employee?.last_name ?? '');
  let email = $state(employee?.email ?? '');
</script>

<form
  onsubmit={(e) => {
    e.preventDefault();
    onSave({ first_name, last_name, email });
  }}
  class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800"
>
  <h2 class="mb-5 text-xl font-bold dark:text-white">
    {employee ? 'Edit Employee' : 'Add Employee'}
  </h2>

  <div class="grid gap-4 sm:grid-cols-2">
    <input
      bind:value={first_name}
      placeholder="First Name"
      aria-label="First Name"
      required
      class="rounded-xl dark:bg-slate-700 dark:text-white"
    />

    <input
      bind:value={last_name}
      placeholder="Last Name"
      aria-label="Last Name"
      required
      class="rounded-xl dark:bg-slate-700 dark:text-white"
    />

    <input
      bind:value={email}
      type="email"
      placeholder="Work Email"
      aria-label="Work Email"
      required
      class="rounded-xl sm:col-span-2 dark:bg-slate-700 dark:text-white"
    />
  </div>

  <div class="mt-6 flex gap-3">
    <button
      type="submit"
      disabled={saving}
      class="rounded-xl bg-[#C65D32] px-6 py-3 text-white disabled:opacity-50"
    >
      {saving ? 'Saving...' : 'Save Employee'}
    </button>

    <button
      type="button"
      onclick={onCancel}
      class="rounded-xl border px-6 py-3 dark:text-white"
    >
      Cancel
    </button>
  </div>
</form>
