import { KeyboardAvoidingView, StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentacion/theme/components/ThemedText'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import ThemeTextInput from '@/presentacion/theme/components/ThemeTextInput'

const LoginScreen = () => {
    const { height } = useWindowDimensions()
    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}>
            <ScrollView style={{ paddingHorizontal: 40 }}>
                <View style={{ paddingTop: height * 0.35 }}>
                    <ThemedText type='title'>Ingresar</ThemedText>
                    <ThemedText style={{ color: 'gray' }}>Por favor ingrese sus datos para continuar</ThemedText>
                </View>
                <View style={{ marginTop: 20 }}>
                    <ThemeTextInput
                        placeholder='correo electrónico'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        icon='mail-outline'
                    />

                    <ThemeTextInput
                        placeholder='contraseña'
                        autoCapitalize='none'
                        secureTextEntry
                        icon='lock-closed-outline'
                    />



                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen


const styles = StyleSheet.create({})