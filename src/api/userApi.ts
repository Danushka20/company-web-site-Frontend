import axios from "axios";
import { z } from "zod";

export const userRoleSchema = z.object({
  id: z.number(),
  userType: z.string(),
  description: z.string().optional(),
  permissionObject: z.any(),
  created_at: z.string(),
});

export type UserRole = z.infer<typeof userRoleSchema>;

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  userTypeId: z.number(),
  name: z.string(),
  mobile: z.string(),
});

export type User = z.infer<typeof userSchema>;

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await axios.post("/api/login", {
    email,
    password,
  });
  return res.data;
}

export async function registerUser({
  name,
  email,
  mobileNumber: mobile,
  password,
  confirmPassword: password_confirmation,
  isCompanyEmployee,
  department,
  jobPosition,
  assignedFactory,
  employeeNumber,
}: any) {
  const res = await axios.post("/api/register", {
    email,
    password,
    name,
    mobile,
    password_confirmation,
    isCompanyEmployee,
    jobPosition,
    department,
    assignedFactory,
    employeeNumber,
  });
  return res.data;
}

export async function validateUser() {
  const res = await axios.get("/api/user");
  return res.data;
}

export async function forgotPassword({ email }: { email: string }) {
  const res = await axios.post("/api/forgot-password", {
    email,
  });
  return res.data;
}

export async function otpVerification({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) {
  const res = await axios.post("/api/reset-password", {
    email,
    otp,
  });
  return res.data;
}

export async function resetPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await axios.post("/api/change-password", {
    email,
    password,
  });
  return res.data;
}
import api from './axios';
import type { User } from '../types/User';

/**
 * USER API
 * Handles operations related to tenant team members.
 */
export const userApi = {
  /**
   * Fetch all users for the current tenant.
   */
  getUsers: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
  },

  /**
   * Create a new team member.
   */
  createUser: async (userData: Partial<User>): Promise<User> => {
    const response = await api.post('/users', userData);
    return response.data;
  },
};
