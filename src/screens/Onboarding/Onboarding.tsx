import React from 'react';
import { StyleSheet, ImageBackground, View, useWindowDimensions } from 'react-native';
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';

export const OnBoarding: React.FC = () => {
    const navigation = useNavigation()
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
                importantForAccessibility="no"
            >
                <Header Logo={<SVG.SMALL_LOGO.default />} title="Chatbox" />

                <Animated.View
                    entering={AnimatedLeft()}
                >
                    <SVG.HEADING.default />
                </Animated.View>

                <Animated.View
                    entering={AnimatedRight()}
                >
                    <Description
                        Description="Our chat app is the perfect
           way to stay connected with friends and family."
                    />
                </Animated.View>
                <Animated.View
                    entering={AnimatedDown()}
                    style={styles.SocialContainer}
                >
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
                    <Links linkStyle={{ color: '#FFF' }} onPress={() => navigation.navigate(ROUTES.SIGN_IN)} account="Existing account ? " link="Log in" />
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
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
    },
    SocialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpBtn: {
        width: wp(90),
        height: hp(7),
    },
});