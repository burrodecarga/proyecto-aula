import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions"
import { User } from "@/core/auth/interface/user"
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage"
import { create } from "zustand"

export type AuthStatus = 'autenticated' | 'unautenticated' | 'chequing'

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: User

    login: (email: string, password: string) => Promise<boolean>
    logout: () => Promise<void>
    checkStatus: () => Promise<void>
    changeStatus: (token?: string, user?: User) => Promise<boolean>

}

export const useAuthStore = create<AuthState>()((set, get) => ({
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
            await SecureStorageAdapter.setItem('token', resp.token)
        }
        return true
        //guardar el token

    },
    logout: async () => {
        SecureStorageAdapter.deleteItem('token')

        set({
            status: 'unautenticated', token: undefined, user: undefined
        })
    },
    checkStatus: async () => {
        const resp = await authCheckStatus()
        console.log('chequeando status', resp)
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
        await SecureStorageAdapter.setItem('token', resp.token)
        //guardar el token
        return true
    },


    changeStatus: async (token?: string, user?: User) => {
        if (!token || !user) {
            set({ status: 'unautenticated', token: undefined, user: undefined })
            await SecureStorageAdapter.deleteItem('token')
            return false
        }
        set({
            status: 'autenticated',
            token: token,
            user: user,
        })

        await SecureStorageAdapter.setItem('token', token)
        return true
    },
}))