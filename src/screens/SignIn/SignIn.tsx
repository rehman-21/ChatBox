import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemedView } from '../../CoreComponent/ThemedView'
import { ThemedText } from '../../CoreComponent/ThemedText'
import { CustomTextInput, Description, GoBack, H1, Separater } from '../../components'
import { sizes } from '../../constant/size'
import { SocialBtn } from '../../components/SocialBtn/SocialBtn'
import { PNG } from '../../constant/svg'
import Animated, { FadeInDown } from 'react-native-reanimated'

export const SignIn = () => {
    const AnimatedDown = () => {
        return FadeInDown.delay(1100).duration(600); // Ensure return statement is used here
    };
    return (
        <ThemedView style={styles.container}>
            <GoBack />
            <H1 TITLE='Log in to Chatbox ' />
            <Description textstyle={{ textAlign: 'center' }}
                Description='Welcome back! Sign in using your social account or email to continue us' />
            <Animated.View
                entering={AnimatedDown()}
                style={styles.SocialContainer}
            >
                <SocialBtn
                    BtnStyle={styles.btnContainer}
                    source={PNG.FACEBOOK_ICON} />
                <SocialBtn
                    BtnStyle={styles.btnContainer}
                    source={PNG.GOOGLE_ICON} />
                <SocialBtn
                    BtnStyle={styles.btnContainer}
                    source={PNG.APPLE} />
            </Animated.View>
            <Separater textStyle={{ color: '#000' }} />
            <CustomTextInput placeholder='Your email' />
            <CustomTextInput secureTextEntry={true} placeholder='Password' />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.wp_5
    },
    SocialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnContainer: {
        backgroundColor: '#FFF',
        borderColor: '#000'
    }
})