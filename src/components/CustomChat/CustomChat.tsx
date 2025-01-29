import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constant/Colors';
import { DIMENSIONS } from '../../constant/Dimensions';

export const MessageItem = ({ item }) => {
    return (
        <>
            {item.sender === 'currentUser' ? (
                <View>
                    <View
                        style={[
                            styles.messageContainer,
                            styles.currentUserMessageContainer,
                        ]}>
                        <Text style={[styles.messageText, styles.currentUserMessageText]}>
                            {item.content}
                        </Text>
                    </View>
                </View>
            ) : (
                item?.replies &&
                item.replies[0].sender === 'currentUser' &&
                item.replies[0].repliedTo === item.id && (
                    <View
                        style={[
                            styles.messageContainer,
                            styles.currentUserMessageContainer,
                        ]}>
                        <View style={styles.replyContainer}>
                            <Text
                                style={[
                                    styles.messageText,
                                    styles.currentUserMessageText,
                                    {
                                        paddingTop: 4,
                                        fontSize: 12,
                                        textAlign: 'left',
                                        color: COLORS.highlight,
                                        paddingBottom: 4,
                                    },
                                ]}>
                                {item.sender}
                            </Text>
                            <Text style={styles.replyTextContent}>{item.content}</Text>
                        </View>
                        <Text style={[styles.messageText, styles.currentUserMessageText]}>
                            {item?.replies[0].content}
                        </Text>
                    </View>
                )
            )}
            {item.sender !== 'currentUser' && (
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{item.content}</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        width: DIMENSIONS.WIDTH * 0.7,
        marginLeft: DIMENSIONS.WIDTH * 0.03,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    currentUserMessageContainer: {
        alignSelf: 'flex-end',
        marginRight: DIMENSIONS.WIDTH * 0.03,
        backgroundColor: COLORS.off_white_green,
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
    currentUserMessageText: {
        color: COLORS.white,
    },
    replyContainer: {
        backgroundColor: COLORS.red,
        padding: 5,
        width: DIMENSIONS.WIDTH * 0.5,
        borderRadius: 5,
    },
    replyTextContent: {
        color: COLORS.white,
        fontSize: 14,
    },
});
