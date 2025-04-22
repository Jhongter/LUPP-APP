// src/services/videoService.js
import axios from 'axios';

// Configure a URL correta do seu backend
const API_URL = 'http://localhost:3001/api/videos'; // Ou a porta do seu backend

// Adicione esta configuração global para o axios
axios.defaults.baseURL = API_URL;
axios.interceptors.request.use(config => {
  console.log('Enviando requisição para:', config.url);
  return config;
}, error => {
  console.error('Erro na requisição:', error);
  return Promise.reject(error);
});

export default {
  async submitVideo(videoData) {
    try {
      const response = await axios.post('/videos', videoData);
      console.log('Resposta do servidor:', response.data);
      return response.data;
    } catch (error) {
      console.error('Erro detalhado:', error.response?.data || error.message);
      throw error;
    }
  },
  // ... outros métodos
};