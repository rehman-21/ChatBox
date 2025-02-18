import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useTheme } from '../../Context/ThemeContext';
import { COLORS } from '../../constant/Colors';
import { ChatHeader, ChatList, ShareContent } from '../../components';
import { useRoute } from '@react-navigation/native';
import { ThemedView } from '../../CoreComponent/ThemedView';

export const MessageScreen = () => {
    const { theme } = useTheme();
    const route = useRoute();
    const { userName } = route.params || {};

    return (
        <ThemedView style={[styles.container]}>
            <ChatHeader userName={userName} />
            <View style={styles.chatContainer}>
                <ChatList />
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    chatContainer: {
        flex: 1,
    },
});
