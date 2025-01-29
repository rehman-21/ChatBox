import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { CallSheet, Header, StatusUsers } from '../../components';
import { ChatSheet } from '../../components/ChatSheet/ChatSheet';
import { ThemedView } from '../../CoreComponent/ThemedView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';


export const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, }}>
            <ThemedView style={{ padding: 20, backgroundColor: '#000' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: sizes.wp_1,

                    }}>
                    <TouchableOpacity
                        style={{
                            width: DIMENSIONS.WIDTH * 0.10,
                            height: DIMENSIONS.HEIGHT * 0.05,
                            borderWidth: 0.2,
                            borderColor: '#FFF',
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 50
                        }}>
                        <AntDesign name="search1" size={20} color={'#FFF'} />
                    </TouchableOpacity>
                    <ThemedText style={{ color: '#FFF' }}>Home</ThemedText>
                    <TouchableOpacity>
                        <Image source={require('../../asset/images/User-1.png')} />
                    </TouchableOpacity>
                </View>
                <StatusUsers />
            </ThemedView>
            <ChatSheet NAVIGATION={() => navigation.navigate(ROUTES.APP_STACK, { screen: ROUTES.MESSAGES_SCREEN })} />
        </View>
    );
};

const styles = StyleSheet.create({});
