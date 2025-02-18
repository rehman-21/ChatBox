import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizes } from '../../constant/size';

interface HeaderProps {
    Logo?: React.ReactNode;
    title: string;
    Icon?: React.ReactNode;
    I?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle: TextStyle;
    name: string,
    size: number,
    color: string,
    onPress: () => void
}

export const Header: React.FC<HeaderProps> = ({
    Logo,
    title,
    Icon,
    I,
    containerStyle,
    textStyle,
    name,
    size,
    color,
    onPress
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={name} size={size} color={color} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                {Logo}
                <ThemedText style={[styles.titleText, textStyle]}>{title}</ThemedText>
            </View>
            <TouchableOpacity>{I}</TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    titleText: {
        color: '#fff',
        fontSize: sizes.size16,
        fontWeight: '500'
    },
});
