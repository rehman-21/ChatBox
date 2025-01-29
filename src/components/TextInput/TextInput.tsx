import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { sizes } from '../../constant/size';
import { useTheme } from '../../Context/ThemeContext';

interface CustomTextInputProps {
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    style?: object;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    style = {},
}) => {

    const { theme } = useTheme()
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor}
        />
    );
};

const styles = StyleSheet.create({

    input: {
        height: sizes.hp_8,
    },
});
