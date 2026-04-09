import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:7036/api/",
})

export default api;
    
