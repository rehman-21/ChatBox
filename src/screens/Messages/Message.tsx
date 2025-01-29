import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useTheme } from '../../Context/ThemeContext';
import { COLORS } from '../../constant/Colors';
import { ChatHeader, ChatList } from '../../components';

export const MessageScreen = () => {
    const { theme } = useTheme();
    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: COLORS.white }]}>
            <ChatHeader />
            <View style={{ flex: 1 }}>
                <ChatList />
            </View>
            {/* <View
                style={{
                    flex: 0.1,
                    justifyContent: 'flex-end',
                    paddingVertical: sizes.hp_2,
                }}>
                <ChatInput />
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
