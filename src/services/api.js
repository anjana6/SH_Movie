import axios from 'axios'
import apiConfig from '../config/apiConfig'

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: apiConfig.apiKey
    }
})

axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use((response) => response, (error) => {
    throw error
})

export default axiosClient