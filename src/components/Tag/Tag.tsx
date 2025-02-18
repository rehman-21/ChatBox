import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';
interface propsText {
    text: string
}

export const Tag: React.FC<propsText> = ({ text }) => {
    return (
        <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#E0F7FA',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    tagText: {
        color: COLORS.black,
        fontSize: sizes.size14,
        fontWeight: '400'
    },
});
