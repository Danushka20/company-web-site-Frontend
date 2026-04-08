import api from './axios';

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
