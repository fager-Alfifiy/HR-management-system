
<script lang="ts">
  type Leave = {
    id: string | number;
    employeeId: string | number;
    leaveType?: string;
    startDate: string;
    endDate: string;
    status: string;
  };

  let {
    requests,
    employeeName,
    onStatus,
    updating
  }: {
    requests: Leave[];
    employeeName: (id: string | number) => string;
    onStatus: (id: string | number, status: string) => void;
    updating: string;
  } = $props();
</script>

<div class="overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-slate-800">
  <table class="w-full text-left text-sm dark:text-white">
    <thead class="bg-orange-50 dark:bg-slate-700">
      <tr>
        <th class="p-4">Employee</th>
        <th class="p-4">Type</th>
        <th class="p-4">Dates</th>
        <th class="p-4">Status</th>
        <th class="p-4">Actions</th>
      </tr>
    </thead>

    <tbody>
      {#each requests as r (r.id)}
        <tr class="border-t border-slate-100 dark:border-slate-700">
          <td class="p-4">{employeeName(r.employeeId)}</td>
          <td class="p-4">{r.leaveType ?? '—'}</td>
          <td class="p-4">{r.startDate} – {r.endDate}</td>
          <td class="p-4 font-semibold">{r.status}</td>
          <td class="p-4">
            {#if r.status?.toLowerCase() === 'pending'}
              <div class="flex gap-3">
                <button
                  type="button"
                  disabled={updating !== ''}
                  onclick={() => onStatus(r.id, 'Approved')}
                  class="font-semibold text-green-600 disabled:opacity-50"
                >
                  Ap
                </button>
                <button
                  type="button"
                  disabled={updating !== ''}
                  onclick={() => onStatus(r.id, 'Rejected')}
                  class="font-semibold text-red-600 disabled:opacity-50"
                >
                  R
                </button>
              </div>
            {:else}
              <span class="text-slate-400">Reviewed</span>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  {#if requests.length === 0}
    <p class="p-6 text-center text-slate-500">
      No leave requests found
    </p>
  {/if}
</div>
