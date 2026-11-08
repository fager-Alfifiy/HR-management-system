<script lang="ts">
  import { UserRound } from '@lucide/svelte';
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
  let {
    employees,
    departments
  }: {
    employees: Employee[];
    departments: Department[];
  } = $props();
  function departmentName(employee: Employee) {
    const id = employee.departmentId ?? employee.department_id;
    return departments.find(
      (department) => String(department.id) === String(id)
    )?.name ?? 'Not assigned';
  }
</script>
<div class="overflow-x-auto">
  <table class="w-full text-left text-sm">
    <thead class="border-b border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200">
      <tr>
        <th class="px-5 py-4">Employee</th>
        <th class="px-5 py-4">Email</th>
        <th class="px-5 py-4">Department</th>
        <th class="px-5 py-4">Job Title</th>
        <th class="px-5 py-4">Status</th>
      </tr>
    </thead>
  </div>