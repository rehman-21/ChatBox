import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { ThemedView } from '../../CoreComponent/ThemedView';
import { chatData } from '../../constant/Dummy';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { COLORS } from '../../constant/Colors';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';



export const ChatUser: React.FC = () => {
    const navigation = useNavigation();

    const renderChat = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(ROUTES.APP_STACK, {
                        screen: ROUTES.MESSAGES_SCREEN,
                    });

                }}
                style={styles.chatItem}>
                <Image source={item.image} style={styles.chatImage} />
                <View style={styles.chatDetails}>
                    <ThemedText style={styles.chatName}>{item.name}</ThemedText>
                    <ThemedText style={styles.chatMessage}>{item.message}</ThemedText>
                </View>
                <View style={styles.chatMeta}>
                    <ThemedText style={styles.chatTime}>{item.time}</ThemedText>
                    {item.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <ThemedText style={styles.unreadCount}>
                                {item.unreadCount}
                            </ThemedText>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={chatData.chats}
            renderItem={renderChat}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.chatList}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
        />
    );
};


const styles = StyleSheet.create({
    chatList: {
        paddingHorizontal: 20,
        marginBottom: 30,
        flex: 1,
    },
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
