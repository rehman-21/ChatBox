import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { COLORS } from '../../constant/Colors';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';

interface ChatUserProps {
    chatData: {
        id: number;
        name: string;
        message: string;
        time: string;
        unreadCount: number;
        image: any;
    };
    navigation: () => void;
}

export const ChatUser: React.FC<ChatUserProps> = ({ chatData, navigation }) => {
    return (
        <TouchableOpacity onPress={navigation} style={styles.chatItem}>
            <Image source={chatData.image} style={styles.chatImage} />
            <View style={styles.chatDetails}>
                <ThemedText style={styles.chatName}>{chatData.name}</ThemedText>
                <ThemedText style={styles.chatMessage}>{chatData.message}</ThemedText>
            </View>
            <View style={styles.chatMeta}>
                <ThemedText style={styles.chatTime}>{chatData.time}</ThemedText>
                {chatData.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                        <ThemedText style={styles.unreadCount}>
                            {chatData.unreadCount}
                        </ThemedText>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chatItem: {
        paddingVertical: sizes.hp_1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatImage: {
        width: DIMENSIONS.WIDTH * 0.12,
        height: DIMENSIONS.HEIGHT * 0.06,
        borderRadius: 25,
    },
    chatDetails: { flex: 1, marginLeft: sizes.wp_3 },
    chatName: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.black,
    },
    chatMessage: {
        fontSize: sizes.size10,
        color: '#7f8c8d',
    },
    chatMeta: {
        alignItems: 'flex-end',
    },
    chatTime: {
        fontSize: 12,
        color: '#7f8c8d',
    },
    unreadBadge: {
        marginTop: 5,
        backgroundColor: '#e74c3c',
        borderRadius: 50,
        width: DIMENSIONS.WIDTH * 0.08,
        height: DIMENSIONS.HEIGHT * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unreadCount: {
        fontSize: sizes.size10,
        color: '#fff',
    },
});
