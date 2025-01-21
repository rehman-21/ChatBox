import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { sizes } from '../../constant/size';

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

    headingText: {
        fontSize: sizes.size22,
        textAlign: 'center',
        fontWeight: '600'
    },
});
