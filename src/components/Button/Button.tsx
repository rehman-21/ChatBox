import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <ThemedText style={styles.text}>{title}</ThemedText>
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

    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomButton;
