import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../Context/ThemeContext';
import { sizes } from '../../constant/size';
import { COLORS } from '../../constant/Colors';

export const ChatHeader = () => {
    const { theme } = useTheme();

    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={20} color={theme.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: sizes.wp_3 }}>
                    <Image source={require('../../asset/images/User-1.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: sizes.wp_1 }}>
                    <Text style={[styles.title, { color: theme.text }]}>name</Text>
                    <Text style={[styles.title, {
                        color: COLORS.black,
                        fontSize: sizes.size10,
                    }]}>
                        Active Now
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="call-outline" size={24} color={theme.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="videocam-outline" size={24} color={theme.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 0.4,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 18,
        marginLeft: 10,
    },
    iconButton: {
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
