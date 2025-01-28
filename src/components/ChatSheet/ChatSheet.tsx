import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet } from '../BottomSheet/BottomSheet'
import { ChatUser } from '../ChatUsers/ChatUser'
import { ThemedView } from '../../CoreComponent/ThemedView'

export const ChatSheet = () => {
    return (
        <BottomSheet>
            <ThemedView style={{ flex: 1, backgroundColor: '#FFFF' }}>
                <ChatUser />
            </ThemedView>
        </BottomSheet>
    )
}


const styles = StyleSheet.create({})