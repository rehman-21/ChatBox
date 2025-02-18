import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { COLORS } from '../../constant/Colors';

interface StatusUsersProps {
    chatData: {
        id: number;
        name: string;
        image: any;
    };
}

export const StatusUsers: React.FC<StatusUsersProps> = ({ chatData }) => {
    return (
        <TouchableOpacity style={styles.statusItem}>
            <Image source={chatData.image} style={styles.statusImage} />
            <ThemedText style={styles.statusName}>{chatData.name}</ThemedText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    statusItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    statusImage: {
        width: DIMENSIONS.WIDTH * 0.12,
        height: DIMENSIONS.HEIGHT * 0.06,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.highlight,
        resizeMode: 'contain',
    },
    statusName: {
        marginTop: 5,
        fontSize: 12,
    },
});
