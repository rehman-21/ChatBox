import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { ThemedView } from '../../CoreComponent/ThemedView';
import Animated, {
    FadeInDown,
    FadeInRight,
    FadeInLeft,
} from 'react-native-reanimated'; // Ensure this is imported
import { PNG, SVG } from '../../constant/svg';
import { Description } from '../../components/Description/Description';
import { Header } from '../../components/Header/Header';
import { SocialBtn } from '../../components/SocialBtn/SocialBtn';
import CustomButton from '../../components/Button/Button';
import { DIMENSIONS } from '../../constant/Dimensions';
import { Links, Separater } from '../../components';

export const SignIn: React.FC = () => {
    const AnimatedLeft = () => {
        return FadeInLeft.delay(1100).duration(600);
    };

    const AnimatedRight = () => {
        return FadeInRight.delay(1100).duration(600);
    };

    const AnimatedDown = () => {
        return FadeInDown.delay(1100).duration(600); // Ensure return statement is used here
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../asset/images/Pink-color.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
                accessible={false}
                importantForAccessibility="no">
                <Header Logo={<SVG.SMALL_LOGO.default />} title="Chatbox" />

                <Animated.View
                    entering={AnimatedLeft()}
                    style={styles.animatedContainer}>
                    <SVG.HEADING.default />
                </Animated.View>

                <Animated.View
                    entering={AnimatedRight()}
                    style={styles.animatedContainer}>
                    <Description
                        Description="Our chat app is the perfect
           way to stay connected with friends and family."
                    />
                </Animated.View>
                <Animated.View entering={AnimatedDown()} style={styles.SocialContainer}>
                    <SocialBtn source={PNG.FACEBOOK_ICON} />
                    <SocialBtn source={PNG.GOOGLE_ICON} />
                    <SocialBtn source={PNG.APPLE_ICON} />
                </Animated.View>
                <Animated.View entering={AnimatedRight()}>
                    <Separater />
                </Animated.View>
                <Animated.View entering={AnimatedLeft()}>
                    <CustomButton
                        buttonStyle={styles.signUpBtn}
                        title="Sign up with mail"
                    />
                </Animated.View>
                <Animated.View entering={AnimatedDown()}>
                    <Links account="Existing account ? " link="Log in" />
                </Animated.View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        padding: 15,
    },
    animatedContainer: {
        marginTop: 10,
    },
    SocialContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpBtn: {
        width: DIMENSIONS.WIDTH * 0.9,
        height: DIMENSIONS.HEIGHT * 0.07,
    },
});
