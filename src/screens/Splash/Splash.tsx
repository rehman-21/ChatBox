import React, { useEffect } from 'react';
import { ThemedView } from '../../CoreComponent/ThemedView';
import { SVG } from '../../constant/svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';
import { Text } from 'react-native-gesture-handler';
import { styles } from './SplashsStyle';

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
            <Text style={styles.title}>ChatBox</Text>
        </ThemedView>
    );
};
