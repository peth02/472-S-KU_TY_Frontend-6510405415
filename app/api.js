import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};