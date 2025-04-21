
//http://127.0.0.1:8000/api/v1/login

import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage"
import axios from "axios"


const appApi = axios.create({
    baseURL: 'http://192.168.1.11:8000/api/v1'
})

//interceptor para cambiar request o response

appApi.interceptors.request.use(async (config) => {

    //verificar si tenemos token en el secure storage
    const token = await SecureStorageAdapter.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export { appApi }