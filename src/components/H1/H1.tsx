import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../CoreComponent/ThemedText';

interface Props {
    TITLE: string;
}

export const H1: React.FC<Props> = ({ TITLE }) => {
    return (
        <View style={styles.content}>
            <ThemedText style={styles.headingText}>
                {TITLE}
            </ThemedText>
        </View>
    );
};


const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    headingText: {
        color: '#FFF',
        marginVertical: 5,
        fontSize: 50,
    },
});
