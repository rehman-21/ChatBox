import React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { ThemedText } from '../../CoreComponent/ThemedText'
import { DIMENSIONS } from '../../constant/Dimensions'
interface textprop {
    textStyle: TextStyle
}

export const Separater: React.FC<textprop> = ({ textStyle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.border}></View>
            <View style={styles.textContainer}>
                <ThemedText style={[styles.orStyle, textStyle]}>
                    OR
                </ThemedText>
            </View>
            <View style={styles.border}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#CDD1D0',
        width: DIMENSIONS.WIDTH * 0.35
    },
    textContainer: {
        padding: 20
    },
    orStyle: {
        color: '#FFF'
    }
})
