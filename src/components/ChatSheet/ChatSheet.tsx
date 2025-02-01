import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BottomSheet } from '../BottomSheet/BottomSheet'
import { ChatUser } from '../ChatUsers/ChatUser'
import { ThemedView } from '../../CoreComponent/ThemedView'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../constant/routes'


export const ChatSheet: React.FC = () => {

    return (
        <BottomSheet>
            <ChatUser />
        </BottomSheet>
    )
}


const styles = StyleSheet.create({})