import axios from 'axios';
import { exitCode } from 'process';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
