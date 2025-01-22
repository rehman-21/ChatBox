import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { DIMENSIONS } from '../../constant/Dimensions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    textStyle: TextStyle
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <ThemedText style={[styles.text, textStyle]}>{title}</ThemedText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: DIMENSIONS.WIDTH * 0.9,
        justifyContent: 'center'

    },
    text: {
        color: 'black',
        fontSize: hp('2%'),
        fontWeight: '500',
    },
});

export default CustomButton;
