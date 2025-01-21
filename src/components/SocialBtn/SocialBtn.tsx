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
        paddingVertical: 10,
        borderRadius: 50,
        height: hp(6),
        width: wp(12),
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginHorizontal: wp(4),
        marginVertical: hp(2)
    },
    image: {
        height: hp(3),
        width: wp(8),
        resizeMode: 'contain',
    },
});
