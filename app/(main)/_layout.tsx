import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAuthStore } from '@/presentacion/auth/store/useAuthStore'
import Indicador from '@/presentacion/theme/components/Indicador'
import { Redirect, Stack } from 'expo-router'

const MainLayout = () => {

    const { status, checkStatus } = useAuthStore()

    useEffect(() => { //
        checkStatus()

    }, [])

    console.log(status)
    if (status === 'chequing') {

        return (<Indicador />)
    }

    if (status === 'unautenticated') {

        return <Redirect href={'/auth/login'} />
    }
    return (
        <Stack>
            <Stack.Screen name='(main)/(aula-app)(home)/index'
                options={{ title: 'Aula' }

                }
            />
        </Stack>
    )
}

export default MainLayout

const styles = StyleSheet.create({})