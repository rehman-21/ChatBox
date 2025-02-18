import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DIMENSIONS } from '../../constant/Dimensions';
interface propsAdmin {
    image: any;
}

export const MemberItem: React.FC<propsAdmin> = ({ image }) => (
    <View style={styles.memberContainer}>
        <Image source={image} style={styles.memberImage} />
        <TouchableOpacity style={styles.addIcon}>
            <Icon name="add-circle" size={25} color="#F0F3F5" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    memberContainer: {
        alignItems: 'center',
        margin: 6,
    },
    memberImage: {
        width: DIMENSIONS.WIDTH * 0.20,
        height: DIMENSIONS.HEIGHT * 0.10,
        borderRadius: 50,
    },
    addIcon: {
        position: 'absolute',
        bottom: 5,
        left: 50
    },
});
