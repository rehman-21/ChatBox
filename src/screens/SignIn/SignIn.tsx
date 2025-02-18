import React, { useContext, useState } from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
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
import { SocialBtn } from '../../components/SocialBtn/SocialBtn';
import { PNG } from '../../constant/svg';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInDown,
} from 'react-native-reanimated';

import CustomButton from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../Context/AuthContext';
import { styles } from './SignInStyle';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';

const AnimatedLeft = () => FadeInLeft.delay(1100).duration(600);
const AnimatedRight = () => FadeInRight.delay(1100).duration(600);
const AnimatedDown = () => FadeInDown.delay(1100).duration(600);

export const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const signIn = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in both email and password.');
      return;
    }
    try {
      await login(email, password);
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate(ROUTES.MY_TAB, { screen: ROUTES.HOME_SCREEN });
    } catch (error) {
      Alert.alert('Error', error.message);
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
          <H1 styleText={styles.title} TITLE="Log in to Chatbox" />
          <Description
            textstyle={styles.description}
            Description={"Welcome back! Sign in using your social\naccount or email to continue with us."}
          />

          <Animated.View
            entering={AnimatedDown()}
            style={styles.socialContainer}>
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

          <Separater textStyle={styles.separator} />

          <Animated.View entering={AnimatedLeft()}>
            <CustomTextInput
              style={styles.input}
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={styles.inputPlaceholder.color}
            />
          </Animated.View>

          <Animated.View entering={AnimatedRight()}>
            <CustomTextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={styles.inputPlaceholder.color}
            />
          </Animated.View>

          <View style={styles.footer}>
            <CustomButton
              title="Log in"
              buttonStyle={[
                styles.loginButton,
                isFormValid && styles.loginButtonActive,
              ]}
              onPress={signIn}
              disabled={!isFormValid}
              textStyle={[
                styles.loginButtonText,
                !isFormValid && styles.loginButtonDisabled,
              ]}
            />
            <Links linkStyle={styles.forgot} link="Forgot Password?" />
          </View>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};


