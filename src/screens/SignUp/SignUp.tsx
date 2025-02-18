import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '../../CoreComponent/ThemedView';
import { CustomTextInput, Description, GoBack, H1 } from '../../components';
import CustomButton from '../../components/Button/Button';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../Context/AuthContext';
import { styles } from './SignUpStyle';

export const Sign_Up = () => {
    const { signup } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
    });



    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleValidation = () => {
        const newErrors = { name: '', email: '', password: '', confirmPass: '' };

        // Trim input values
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedConfirmPass = confirmPass.trim();

        console.log('password:', trimmedPassword);
        console.log('confirmPass:', trimmedConfirmPass);

        if (!validateEmail(trimmedEmail)) newErrors.email = 'Invalid email address';
        if (trimmedPassword.length < 6)
            newErrors.password = 'Password must be at least 6 characters';
        if (trimmedPassword !== trimmedConfirmPass)
            newErrors.confirmPass = 'Passwords do not match';

        setErrors(newErrors);
        return Object.values(newErrors).every(err => err === '');
    };


    const handleSignUp = async () => {
        if (!handleValidation()) return;

        try {
            await signup(name, email, password, confirmPass);
            Alert.alert('Success', 'Account Created Successfully!');
        } catch (error: any) {
            Alert.alert('Error', error.message);
            console.log("hi")
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled">
            <ThemedView style={styles.container}>
                <GoBack />
                <H1 TITLE="Sign up with Email" />
                <Description
                    textstyle={{ textAlign: 'center' }}
                    Description="Get chatting with friends and family today by signing up for our chat app!"
                />

                <Animated.View entering={FadeInLeft.delay(200).duration(600)}>
                    <CustomTextInput
                        style={styles.input}
                        placeholder="Your name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={COLORS.off_white_green}
                    />
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(300).duration(600)}>
                    <CustomTextInput
                        placeholder="Your email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={COLORS.off_white_green}
                        style={[styles.input, errors.email ? styles.errorInput : null]}
                    />
                    {errors.email ? (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    ) : null}
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(400).duration(600)}>
                    <CustomTextInput
                        secureTextEntry
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor={COLORS.off_white_green}
                        style={[styles.input, errors.password ? styles.errorInput : null]}
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
                        placeholderTextColor={COLORS.off_white_green}
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
                        onPress={handleSignUp}
                        textStyle={{
                            color:
                                name && email && password && confirmPass && validateEmail(email)
                                    ? COLORS.white
                                    : COLORS.off_white_gray,
                        }}
                    />
                </View>
            </ThemedView>
        </KeyboardAwareScrollView>
    );
};


