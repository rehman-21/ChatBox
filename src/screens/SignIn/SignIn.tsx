import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { ThemedView } from '../../CoreComponent/ThemedView';
import {
    CustomTextInput,
    Description,
    GoBack,
    H1,
    Links,
    Separater,
} from '../../components';
import { sizes } from '../../constant/size';
import { SocialBtn } from '../../components/SocialBtn/SocialBtn';
import { PNG } from '../../constant/svg';
import Animated, {
    FadeInDown,
    FadeInLeft,
    FadeInRight,
} from 'react-native-reanimated';
import CustomButton from '../../components/Button/Button';
import { COLORS } from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const submit = () => {
        if (isFormValid) {
            navigation.navigate(ROUTES.MY_TAB, { screen: ROUTES.HOME_SCREEN });
        } else {
            Alert.alert('Error', 'Please fill in both email and password.');
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ThemedView style={styles.container}>
                    <GoBack />
                    <H1 TITLE="Log in to Chatbox" />
                    <Description
                        textstyle={{ textAlign: 'center' }}
                        Description="Welcome back! Sign in using your social account or email to continue with us."
                    />
                    <Animated.View
                        entering={FadeInDown.delay(1100).duration(600)}
                        style={styles.SocialContainer}>
                        <SocialBtn
                            BtnStyle={styles.btnContainer}
                            source={PNG.FACEBOOK_ICON}
                        />
                        <SocialBtn
                            BtnStyle={styles.btnContainer}
                            source={PNG.GOOGLE_ICON}
                        />
                        <SocialBtn BtnStyle={styles.btnContainer} source={PNG.APPLE} />
                    </Animated.View>
                    <Separater textStyle={{ color: COLORS.black }} />
                    <Animated.View entering={FadeInLeft.delay(1100).duration(600)}>
                        <CustomTextInput
                            style={styles.input}
                            placeholder="Your email"
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor={COLORS.off_white_green}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInRight.delay(1100).duration(600)}>
                        <CustomTextInput
                            style={styles.input}
                            secureTextEntry
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor={COLORS.off_white_green}
                        />
                    </Animated.View>
                    <View style={styles.footer}>
                        <CustomButton
                            title="Log in"
                            buttonStyle={[
                                styles.loginButton,
                                isFormValid && styles.loginButtonActive,
                            ]}
                            onPress={submit}
                            textStyle={{
                                color: isFormValid ? COLORS.white : COLORS.off_white_gray,
                            }}
                        />
                        <Links linkStyle={styles.forgot} link="Forgot Passwor?" />
                    </View>
                </ThemedView>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    SocialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: sizes.wp_2,
    },
    btnContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        marginHorizontal: sizes.wp_3,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: sizes.hp_2,
    },
    forgot: {
        color: COLORS.off_white_green,
        fontSize: sizes.size14,
    },
    loginButton: {
        backgroundColor: COLORS.off_white,
    },
    loginButtonActive: {
        backgroundColor: COLORS.off_white_green,
    },
    input: {
        borderBottomWidth: 0.4,
        borderColor: COLORS.black_gray,
        marginVertical: sizes.hp_2,
        fontSize: sizes.size15,
        fontWeight: '500'

    },
});
