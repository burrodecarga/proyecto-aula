import { appApi } from "@/core/api/app/appApi"


export interface LoginResponse {
    user: User
    token: string
}

export interface User {
    name: string
    email: string
}


const returnUserTokens = (data: LoginResponse): { user: User, token: string } => {
    const { token, user } = data

    return {
        token,
        user
    }
}


export const authLogin = async (email: string, password: string) => {

    email = email.toLowerCase()
    try {
        const { data } = await appApi.post<LoginResponse>('auth/login', { email, password })
        return returnUserTokens(data)
    } catch (error) {
        console.log(error)
        //throw new Error('credenciales Inválidas')
        return null

    }
}

export const authCheckStatus = async () => {
    try {
        const { data } = await appApi.get<LoginResponse>('auth/check-status')
        return returnUserTokens(data)
    } catch (error) {
        return null
    }
}