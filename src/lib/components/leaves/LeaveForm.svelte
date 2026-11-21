
<script lang="ts">
  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
  };

  let {
    employees,
    onSave
  }: {
    employees: Employee[];
    onSave: (data: {
      employeeId: string;
      leaveType: string;
      startDate: string;
      endDate: string;
      reason: string;
    }) => Promise<void>;
  } = $props();

  let employeeId = $state('');
  let leaveType = $state('Annual');
  let startDate = $state('');
  let endDate = $state('');
  let reason = $state('');
  let saving = $state(false);
  let error = $state('');

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    error = '';

    if (endDate < startDate) {
      error = 'End date must be after start date.';
      return;
    }

    saving = true;
    try {
      await onSave({
        employeeId, leaveType, startDate, endDate, reason
      });
      startDate = '';
      endDate = '';
      reason = '';
    } catch {
      error = 'Unable to submit request.';
    } finally {
      saving = false;
    }
  }
</script>

<form
  onsubmit={submit}
  class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800"
>
  <h2 class="mb-5 text-xl font-bold dark:text-white">
    New Leave Request
  </h2>

  <div class="grid gap-4 md:grid-cols-2">
    <select bind:value={employeeId} required
      aria-label="Employee"
      class="rounded-xl dark:bg-slate-700 dark:text-white">
      <option value="" disabled>Select Employee</option>
      {#each employees as employee (employee.id)}
        <option value={String(employee.id)}>
          {employee.first_name} {employee.last_name}
        </option>
      {/each}
    </select>

    <select bind:value={leaveType}
      aria-label="Leave Type"
      class="rounded-xl dark:bg-slate-700 dark:text-white">
      <option>Annual</option>
      <option>Sick</option>
      <option>Emergency</option>
      <option>Unpaid</option>
    </select>

    <label class="text-sm dark:text-white">
      Start Date
      <input type="date" bind:value={startDate} required
        class="mt-1 w-full rounded-xl dark:bg-slate-700 dark:text-white" />
    </label>

    <label class="text-sm dark:text-white">
      End Date
      <input type="date" bind:value={endDate} min={startDate} required
        class="mt-1 w-full rounded-xl dark:bg-slate-700 dark:text-white" />
    </label>

    <textarea
      bind:value={reason}
      placeholder="Reason (optional)"
      aria-label="Reason"
      rows="3"
      class="rounded-xl md:col-span-2 dark:bg-slate-700 dark:text-white"
    ></textarea>
  </div>

  {#if error}
    <p role="alert" class="mt-3 text-sm text-red-600">{error}</p>
  {/if}

  <button type="submit" disabled={saving || !employees.length}
    class="mt-5 rounded-xl bg-[#C65D32] px-6 py-3 font-semibold text-white disabled:opacity-50">
    {saving ? 'Submitting...' : 'Submit Request'}
  </button>
</form>