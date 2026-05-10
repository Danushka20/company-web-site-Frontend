export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  mobileNumber?: string;
  isCompanyEmployee?: boolean;
  jobPosition?: string;
  department?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
