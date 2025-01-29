import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomTextInput } from '../TextInput/TextInput';
import { COLORS } from '../../constant/Colors';
import { AttechIcon, DocumentsIcon, SendIcon } from '../../constant/svg';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Message {
    id: string;
    text?: string;
    type: 'sent' | 'received';
    audio?: string;
}

export const ChatList = () => {
    const { theme } = useTheme();
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hello! Jhon Abraham', type: 'sent' },
        { id: '2', text: 'Hello! Nazrul How are you?', type: 'received' },
        { id: '3', text: 'You did your job well!', type: 'sent' },
        { id: '4', text: 'Have a great working week!!', type: 'received' },
        { id: '5', text: 'Hope you like it', type: 'received' },
        { id: '6', audio: '00:16', type: 'sent' },
    ]);
    const [isSend, setIsSend] = useState('');

    const sendMessage = () => {
        if (isSend.trim().length > 0) {
            const newMessage: Message = {
                id: Date.now().toString(),
                text: isSend,
                type: 'sent',
            };
            setMessages([...messages, newMessage]);
            setIsSend('');
        }
    };

    const renderMessage = ({ item }: { item: Message }) => (
        <View
            style={[
                styles.messageContainer,
                item.type === 'sent' ? styles.sent : styles.received,
            ]}>
            {item.text && (
                <Text
                    style={[
                        styles.messageText,
                        { color: item.type === 'sent' ? COLORS.white : COLORS.black },
                    ]}>
                    {item.text}
                </Text>
            )}
            {item.audio && (
                <View style={styles.audioContainer}>
                    <Ionicons name="play-circle" size={24} color="white" />
                    <Text style={styles.audioText}>{item.audio}</Text>
                </View>
            )}
        </View>
    );

    return (
        <>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={20}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    {/* Chat Messages */}
                    <FlatList
                        data={messages}
                        renderItem={renderMessage}
                        keyExtractor={item => item.id}
                    />

                    {/* Chat Input */}

                </View>
            </KeyboardAwareScrollView>
            <View style={styles.chatInputContainer}>
                <TouchableOpacity>
                    <AttechIcon />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        style={[
                            styles.input,
                            { color: theme.text, width: DIMENSIONS.WIDTH * 0.48 },
                        ]}
                        placeholderTextColor={COLORS.off_white_gray}
                        placeholder={'Write your Message'}
                        value={isSend}
                        onChangeText={setIsSend}
                    />
                    <TouchableOpacity>
                        <DocumentsIcon />
                    </TouchableOpacity>
                </View>
                {isSend ? (
                    <TouchableOpacity onPress={sendMessage}>
                        <SendIcon />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.iconRow}>
                        <TouchableOpacity style={styles.iconSpacing}>
                            <Ionicons
                                name="camera-outline"
                                size={25}
                                color={COLORS.black_gray}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons
                                name="mic-outline"
                                size={25}
                                color={COLORS.black_gray}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
    },
    messageContainer: {
        padding: 12,
        marginVertical: 5,
        borderRadius: 10,
        maxWidth: '70%',
    },
    sent: {
        alignSelf: 'flex-end',
        backgroundColor: '#00A884'
    },
    received: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5E5'
    },
    messageText: {
        fontSize: sizes.size12,
        color: COLORS.black
    },
    audioContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    audioText: {
        marginLeft: 10,
        color: 'white', fontSize: 16
    },

    chatInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.wp_4,
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    inputContainer: {
        width: DIMENSIONS.WIDTH * 0.6,
        height: DIMENSIONS.HEIGHT * 0.07,
        borderRadius: 10,
        backgroundColor: COLORS.off_white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: sizes.wp_3,
    },
    input: {
        fontSize: sizes.size12,
        color: COLORS.off_white_gray
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconSpacing: {
        marginRight: 8
    },
});
