import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';

interface HeaderProps {
    Logo?: React.ReactNode; // Optional React component or element for the logo
    title: string; // Title text for the header
    Icon?: React.ReactNode; // Optional React component or element for an icon
    I?: React.ReactNode; // Optional React component or element for additional content
    containerStyle?: StyleProp<ViewStyle>; // Optional custom styles for the container
}

export const Header: React.FC<HeaderProps> = ({ Logo, title, Icon, I, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View>{Icon}</View>
            <View style={styles.titleContainer}>
                {Logo}
                <ThemedText style={styles.titleText}>{title}</ThemedText>
            </View>
            <View>{I}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, // Used for spacing between Logo and title
    },
    titleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

