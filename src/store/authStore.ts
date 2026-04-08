import type { User } from '../types/Auth.ts';

export const authStore = {
  user: null as User | null,
  token: null as string | null,
  
  setUser: (user: User | null) => {
    authStore.user = user;
  },
  
  setToken: (token: string | null) => {
    authStore.token = token;
  }
};
