import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../../CoreComponent/ThemedView';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { SVG } from '../../constant/svg';
import { Colors } from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';

export const Splash: React.FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(ROUTES.ONBOARDING_SCREEN);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <ThemedView style={styles.container}>
            <SVG.SPLASH_LOGO.default />
            <ThemedText style={styles.title}>ChatBox</ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: '700',
        paddingTop: 20
    },
});
