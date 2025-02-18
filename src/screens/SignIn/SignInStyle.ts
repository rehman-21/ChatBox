import { StyleSheet } from 'react-native';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';

export const styles = StyleSheet.create({
  container: {
    flex: sizes.flex_1,
    paddingHorizontal: sizes.wp_4,
  },
  title: {
    textAlign: 'center',
    color: COLORS.black,
  },
  description: {
    textAlign: 'center',
  },
  socialContainer: {
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
  separator: {
    color: COLORS.black,
  },
  input: {
    borderBottomWidth: 0.4,
    borderColor: COLORS.black_gray,
    marginVertical: sizes.hp_2,
    fontSize: sizes.size15,
    fontWeight: '500',
  },
  inputPlaceholder: {
    color: COLORS.off_white_green,
  },
  footer: {
    flex: sizes.flex_1,
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
  loginButtonText: {
    color: COLORS.white,
  },
  loginButtonDisabled: {
    color: COLORS.off_white_gray,
  },
});
