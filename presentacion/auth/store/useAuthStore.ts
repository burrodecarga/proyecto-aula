import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions"
import { User } from "@/core/auth/interface/user"
import { create } from "zustand"

export type AuthStatus = 'autenticated' | 'unautenticated' | 'chequing'

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: User

    login: (email: string, password: string) => Promise<boolean>
    logout: () => Promise<void>
    checkStatus: () => Promise<void>
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'chequing',
    user: undefined,
    token: undefined,
    login: async (email: string, password: string) => {
        const resp = await authLogin(email, password)
        if (!resp) {
            set({
                status: 'unautenticated', token: undefined, user: undefined
            })
            return false
        }
        if (resp) {
            set({
                status: 'autenticated', user: resp.user, token: resp.token
            })
        }
        //guardar el token
        return true

    },
    logout: async () => {

        set({
            status: 'unautenticated', token: undefined, user: undefined
        })
    },


    checkStatus: async () => {
        const resp = await authCheckStatus()
        if (!resp) {
            set({
                status: 'unautenticated', token: undefined, user: undefined
            })
            return
        }
        if (resp) {
            set({
                status: 'autenticated', user: resp.user, token: resp.token
            })
        }
        //guardar el token
        return
    }
}))