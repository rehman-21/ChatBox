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
import { CustomTextInput, Description, GoBack, H1 } from '../../components';
import CustomButton from '../../components/Button/Button';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPass: '' });

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleValidation = () => {
        const newErrors = { email: '', password: '', confirmPass: '' };

        if (!validateEmail(email)) newErrors.email = 'Invalid email address';
        if (password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';
        if (password !== confirmPass)
            newErrors.confirmPass = 'Passwords do not match';

        setErrors(newErrors);
        return Object.values(newErrors).every((err) => err === '');
    };

    const submit = () => {
        if (handleValidation()) {
            console.log('Sign Up Pressed');
            Alert.alert('Account Created Successfully!');
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled"
        >
            <ThemedView style={styles.container}>
                <GoBack />
                <H1 TITLE="Sign up with Email" />
                <Description
                    textstyle={{ textAlign: 'center' }}
                    Description="Get chatting with friends and family today by signing up for our chat app!"
                />

                <Animated.View entering={FadeInLeft.delay(200).duration(600)}>
                    <CustomTextInput
                        placeholder="Your name"
                        value={name}
                        onChangeText={setName}
                    />
                </Animated.View>
                <Animated.View entering={FadeInRight.delay(300).duration(600)}>
                    <CustomTextInput
                        placeholder="Your email"
                        value={email}
                        onChangeText={setEmail}
                        style={[
                            styles.input,
                            errors.email ? styles.errorInput : null,
                        ]}
                    />
                    {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                </Animated.View>
                <Animated.View entering={FadeInRight.delay(400).duration(600)}>
                    <CustomTextInput
                        secureTextEntry
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        style={[
                            styles.input,
                            errors.password ? styles.errorInput : null,
                        ]}
                    />
                    {errors.password ? (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    ) : null}
                </Animated.View>
                <Animated.View entering={FadeInRight.delay(500).duration(600)}>
                    <CustomTextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        style={[
                            styles.input,
                            errors.confirmPass ? styles.errorInput : null,
                        ]}
                    />
                    {errors.confirmPass ? (
                        <Text style={styles.errorText}>{errors.confirmPass}</Text>
                    ) : null}
                </Animated.View>

                <View style={styles.footer}>
                    <CustomButton
                        title="Create an account"
                        buttonStyle={[
                            styles.loginButton,
                            name && email && password && confirmPass && validateEmail(email)
                                ? styles.loginButtonActive
                                : null,
                        ]}
                        onPress={submit}
                        textStyle={{
                            color:
                                name && email && password && confirmPass && validateEmail(email)
                                    ? COLORS.white
                                    : COLORS.off_white_gray,
                        }}
                    />
                </View>
            </ThemedView>
        </KeyboardAwareScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    input: {
        marginBottom: sizes.wp_2,
    },
    errorInput: {
        borderColor: COLORS.red,
        borderBottomWidth: 1,
    },
    errorText: {
        color: COLORS.red,
        fontSize: sizes.size12,
        marginBottom: sizes.wp_2,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: sizes.hp_2,
    },
    loginButton: {
        backgroundColor: COLORS.off_white,
    },
    loginButtonActive: {
        backgroundColor: COLORS.off_white_green,
    },
});
