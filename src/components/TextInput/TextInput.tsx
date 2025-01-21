import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { sizes } from '../../constant/size';

interface CustomTextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    style?: object;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    style = {},
}) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor={'#5EBAAE'}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        justifyContent: 'center'
    },
    input: {
        height: sizes.hp_8,
        borderBottomWidth: 1,
        borderColor: '#595E5C',
        fontWeight: '600'
    },
});

