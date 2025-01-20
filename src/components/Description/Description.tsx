import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
interface desProps {
    Description: string
}

export const Description: React.FC<desProps> = ({ Description }) => {
    return (
        <View >
            <ThemedText style={styles.text}>{Description}</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        color: '#B9C1BE',
    },
});

