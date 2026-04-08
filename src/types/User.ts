export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Member';
  tenantId: string;
}
