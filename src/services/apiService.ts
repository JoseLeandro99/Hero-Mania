import axios from 'axios';
import env from '../../.env.json';

const baseURL = `https://superheroapi.com/api/${env.api_token}/`;

const api = axios.create({ baseURL });

export default api;