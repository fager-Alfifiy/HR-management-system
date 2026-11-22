
<script lang="ts">
  type Employee = {
    id: string | number;
    first_name: string;
    last_name: string;
    email: string;
  };

  let {
    employees,
    onEdit
  }: {
    employees: Employee[];
    onEdit: (employee: Employee) => void;
  } = $props();
</script>
<div class="overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-slate-800">
  <table class="w-full text-left text-sm dark:text-white">
    <thead class="bg-orange-50 text-slate-700 dark:bg-slate-700 dark:text-white">
      <tr>
        <th class="p-4">Employee</th>
        <th class="p-4">Email</th>
        <th class="p-4">ID</th>
        <th class="p-4">Action</th>
      </tr>
    </thead>

    <tbody>
      {#each employees as employee (employee.id)}
        <tr class="border-t border-slate-100 dark:border-slate-700">
          <td class="p-4 font-medium">
            {employee.first_name} {employee.last_name}
          </td>
          <td class="p-4">{employee.email}</td>
          <td class="p-4">{employee.id}</td>
          <td class="p-4">
            <button
              type="button"
              onclick={() => onEdit(employee)}
              class="font-semibold text-[#C65D32] hover:underline"
            >
              Edit
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  {#if employees.length === 0}
    <p class="p-6 text-center text-slate-500">
      No employees found.
    </p>
  {/if}
</div>