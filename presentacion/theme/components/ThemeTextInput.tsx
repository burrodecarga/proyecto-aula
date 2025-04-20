import { StyleSheet, Text, TextInputProps, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap
}
const ThemeTextInput = ({ icon, ...rest }: Props) => {
    return (
        <View>
            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    //color={textColor}
                    style={{ marginRight: 10 }}
                />
            )}
            <TextInput

                {...rest}
            />

        </View>
    )
}

export default ThemeTextInput

const styles = StyleSheet.create({})