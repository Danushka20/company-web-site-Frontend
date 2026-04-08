import api from './axios';
import type { AuthResponse } from '../types/Auth';

/**
 * AUTH API
 * Handles user authentication processes.
 */
export const authApi = {
  login: async (credentials: any): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },
};
