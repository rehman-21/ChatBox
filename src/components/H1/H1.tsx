import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { sizes } from '../../constant/size';
import { DIMENSIONS } from '../../constant/Dimensions';

interface Props {
    TITLE: string;
    styleText: TextStyle
}

export const H1: React.FC<Props> = ({ TITLE, styleText }) => {
    return (
        <View >
            <Text style={[styles.headingText, styleText]}>
                {TITLE}
            </Text>
        </View >
    );
};
export const H2: React.FC<Props> = ({ TITLE, styleText }) => {
    return (
        <View>
            <Text style={[styles.txt, styleText]}>
                {TITLE}
            </Text>
        </View >
    );
};


const styles = StyleSheet.create({

    headingText: {
        fontSize: sizes.size18,
        fontWeight: '600'
    },
    txt: {
        fontWeight: '500'
    },
});
