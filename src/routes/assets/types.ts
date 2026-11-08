export type UserRole = 'Employee' | 'Manager' | 'HR' | 'Admin';
export type Employee = {
  id: string; employeeCode: string; first_name: string; last_name: string;
  email: string; gender: string; ip_address: string; departmentId: string;
  position: string; hireDate: string; employmentStatus: 'Active' | 'Inactive';
  managerId: string | null;
};
export type Department = { id: string; name: string };
export type User = { id: string; employeeId: string | null; email: string; role: UserRole; enabled: boolean };
export type Salary = { id: string; employeeId: string; currency: 'SAR'; baseSalary: number; housingAllowance: number; transportAllowance: number; effectiveDate: string };
export type LeaveBalance = { id: string; employeeId: string; year: number; leaveType: string; entitlementDays: number; usedDays: number; remainingDays: number };
export type LeaveRequest = { id: string; employeeId: string; leaveType: string; startDate: string; endDate: string; days: number; status: 'Pending' | 'Approved' | 'Rejected'; reviewedBy: string | null; reason: string };
export type Attendance = { id: string; employeeId: string; date: string; checkIn: string | null; checkOut: string | null; workedHours: number; status: 'Present' | 'Late' | 'Absent' };
export type EmployeeDocument = { id: string; employeeId: string; type: string; filename: string; status: string; uploadedAt: string };
export type HRRequest = { id: string; employeeId: string; type: string; status: string; requestedAt: string };
export type Notification = { id: string; userId: string; message: string; isRead: boolean; createdAt: string };
export type AuditLog = { id: string; userId: string; action: string; entityType: string; entityId: string; createdAt: string };
