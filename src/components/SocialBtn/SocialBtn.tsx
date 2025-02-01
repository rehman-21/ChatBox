import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ImageSourcePropType, ViewStyle, StyleProp } from 'react-native';
import { DIMENSIONS } from '../../constant/Dimensions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface BtnProps {
    source: ImageSourcePropType;
    BtnStyle?: StyleProp<ViewStyle>;
}

export const SocialBtn: React.FC<BtnProps> = ({ source, BtnStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, BtnStyle]}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        height: DIMENSIONS.HEIGHT * 0.06,
        width: DIMENSIONS.WIDTH * 0.12,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginHorizontal: wp(4),
        marginVertical: hp(2)
    },
    image: {
        height: DIMENSIONS.HEIGHT * 0.06,
        width: DIMENSIONS.WIDTH * 0.07,
        resizeMode: 'contain',
    },
});
