import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/basbgzLP6Hbw6eOVaLZiCMFNLMSGI3g8',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;
