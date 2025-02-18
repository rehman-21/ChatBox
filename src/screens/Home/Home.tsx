import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { BottomSheet, ChatUser, StatusUsers } from '../../components';
import { ThemedView } from '../../CoreComponent/ThemedView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';
import { chatData } from '../../constant/Dummy';

import { styles } from './HomeStyle';

export const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ThemedView style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.searchButton}>
                        <AntDesign name="search1" size={20} color={'#FFF'} />
                    </TouchableOpacity>
                    <ThemedText style={styles.headerTitle}>Home</ThemedText>
                    <TouchableOpacity>
                        <Image source={require('../../asset/images/User-1.png')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={chatData.statuses}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.statusList}
                    renderItem={({ item }) => <StatusUsers chatData={item} />}
                />
            </ThemedView>
            <BottomSheet>
                <FlatList
                    data={chatData.chats}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.chatList}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                        <ChatUser
                            navigation={() =>
                                navigation.navigate(ROUTES.APP_STACK, {
                                    screen: ROUTES.MESSAGES_SCREEN,
                                    params: {
                                        chatId: item.id,
                                        chatName: item.name,
                                    },
                                })
                            }
                            chatData={item}
                        />
                    )}
                />
            </BottomSheet>
        </View>
    );
};


