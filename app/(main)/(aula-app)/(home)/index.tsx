import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentacion/theme/components/ThemedText'
import { useThemeColor } from '@/presentacion/theme/hooks/useThemeColor'

const HomeScreenAula = () => {
    const primary = useThemeColor({}, 'primary')

    return (
        <View style={{ paddingTop: 100, marginHorizontal: 20, backgroundColor: primary, flex: 1 }}>
            <ThemedText style={{ fontFamily: 'KanitBold' }}>HomeScreenAula</ThemedText>
        </View>
    )
}

export default HomeScreenAula

const styles = StyleSheet.create({})