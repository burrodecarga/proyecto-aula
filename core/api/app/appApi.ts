
//http://127.0.0.1:8000/api/v1/login

import axios from "axios"


const appApi = axios.create({
    baseURL: 'http: //127.0.0.1:8000/api/v1/'
})

export { appApi }