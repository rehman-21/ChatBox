import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Description } from '../../components/Description/Description';
import { SocialBtn } from '../../components/SocialBtn/SocialBtn';
import CustomButton from '../../components/Button/Button';
import { H1, Links, Separater } from '../../components';
import Animated, {
    FadeInDown,
    FadeInRight,
    FadeInLeft,
} from 'react-native-reanimated';
import { PNG, SVG } from '../../constant/svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';
import { styles } from './OnboardStyle';


const AnimatedLeft = () => FadeInLeft.delay(1100).duration(600);
const AnimatedRight = () => FadeInRight.delay(1100).duration(600);
const AnimatedDown = () => FadeInDown.delay(1100).duration(600);

export const OnBoarding: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../asset/images/Pink-color.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
                accessible={false}
                importantForAccessibility="no">
                <Header Logo={<SVG.SMALL_LOGO.default />} title="Chatbox" />

                <Animated.View entering={AnimatedLeft()}>
                    <H1 styleText={styles.titleText} TITLE={'Connect\nfriends'} />
                    <H1 styleText={styles.subtitleText} TITLE={'easily &\nquickly'} />
                </Animated.View>

                <Animated.View entering={AnimatedRight()}>
                    <Description
                        Description={
                            'Our chat app is the perfect way to stay\nconnected with friends and family.'
                        }
                    />
                </Animated.View>

                <Animated.View entering={AnimatedDown()} style={styles.socialContainer}>
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
                        onPress={() => navigation.navigate(ROUTES.SIGN_UP)}
                    />
                </Animated.View>

                <Animated.View entering={AnimatedDown()}>
                    <Links
                        linkStyle={styles.linkText}
                        onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
                        account="Existing account? "
                        link="Log in"
                    />
                </Animated.View>
            </ImageBackground>
        </View>
    );
};


