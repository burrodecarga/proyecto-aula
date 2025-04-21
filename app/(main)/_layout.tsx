import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAuthStore } from '@/presentacion/auth/store/useAuthStore'
import Indicador from '@/presentacion/theme/components/Indicador'
import { Redirect, Stack } from 'expo-router'
import LogoutIconButton from '@/presentacion/auth/components/LogoutIconButton'

const MainLayout = () => {

    const { status, checkStatus } = useAuthStore()

    useEffect(() => { //
        checkStatus()

    }, [])

    console.log(status)
    if (status === 'checking') {

        return (<Indicador />)
    }

    if (status === 'unauthenticated') {

        return <Redirect href={'/auth/login'} />
    }
    return (
        <Stack>
            <Stack.Screen name='(aula-app)'
                options={{ title: 'Aula', headerLeft: () => <LogoutIconButton /> }
                }
            />
        </Stack>
    )
}

export default MainLayout

const styles = StyleSheet.create({})