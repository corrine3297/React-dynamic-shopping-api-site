import axios from 'axios';

const apiAxiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com"
})

export default apiAxiosInstance;