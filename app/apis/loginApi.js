import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);
    if (response.data.code === 'OK') {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};