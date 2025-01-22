import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sizes } from '../../constant/size';
interface desProps {
    Description: string
    textstyle: TextStyle
}

export const Description: React.FC<desProps> = ({ Description, textstyle }) => {
    return (
        <View >
            <ThemedText style={[styles.text, textstyle]}>{Description}</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({

    text: {
        color: '#797C7B',
        fontSize: sizes.size14,
        lineHeight: 20,
        marginVertical: sizes.hp_2
    },
});

