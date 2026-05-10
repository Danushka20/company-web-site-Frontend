import api from './axios';

/**
 * PROJECT API
 * Manage projects and portfolio items.
 */
export const projectApi = {
  // Get all projects
  getAll: async () => {
    const response = await api.get('/api/projects');
    return response.data;
  },

  // Get single project
  getById: async (id: string | number) => {
    const response = await api.get(`/api/projects/${id}`);
    return response.data;
  },

  // Create new project
  create: async (data: any) => {
    const response = await api.post('/api/projects', data);
    return response.data;
  },

  // Update project
  update: async (id: string | number, data: any) => {
    const response = await api.put(`/api/projects/${id}`, data);
    return response.data;
  },

  // Delete project
  delete: async (id: string | number) => {
    const response = await api.delete(`/api/projects/${id}`);
    return response.data;
  },
};

/**
 * PRODUCT API
 * Talk to the backend about items/stock.
 */
export const productApi = {
  getInventory: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  
  updateStock: async (id: number, amount: number) => {
    return api.patch(`/products/${id}`, { amount });
  },
};
