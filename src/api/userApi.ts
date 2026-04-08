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
