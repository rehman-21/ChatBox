import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet } from '../BottomSheet/BottomSheet'
import { ChatUser } from '../ChatUsers/ChatUser'
import { ThemedView } from '../../CoreComponent/ThemedView'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../constant/routes'
interface navProp {
    NAVIGATION: () => void
}

export const ChatSheet: React.FC<navProp> = ({ NAVIGATION }) => {
    const navigation = useNavigation()
    return (
        <BottomSheet>
            <ThemedView style={{ flex: 1, backgroundColor: '#FFFF' }}>
                <ChatUser onPress={NAVIGATION} />
            </ThemedView>
        </BottomSheet>
    )
}


const styles = StyleSheet.create({})