import axios from 'axios';

const API = axios.create({ baseURL: 'https://tutorial4-api.herokuapp.com/api/users' });

export const performLogin = (loginData) => API.post('/login', loginData);

export const getAllUsers = () => API.get('/');

export const getUserDetails = (userId) => API.get(`/${userId}`);