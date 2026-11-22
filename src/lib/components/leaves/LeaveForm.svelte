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