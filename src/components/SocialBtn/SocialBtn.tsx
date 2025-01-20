import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { DIMENSIONS } from '../../constant/Dimensions';

interface BtnProps {
    source: ImageSourcePropType;
}

export const SocialBtn: React.FC<BtnProps> = ({ source }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 50,
        width: DIMENSIONS.WIDTH * 0.12,
        height: DIMENSIONS.HEIGHT * 0.06,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginHorizontal: 10,
        marginVertical: 10
    },
    image: {
        width: DIMENSIONS.WIDTH * 0.06,
        height: DIMENSIONS.HEIGHT * 0.03,
        resizeMode: 'contain',
    },
});
