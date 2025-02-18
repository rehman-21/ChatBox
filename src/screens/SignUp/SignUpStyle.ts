import {StyleSheet} from 'react-native';
import {sizes} from '../../constant/size';
import {COLORS} from '../../constant/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: sizes.flex_1,
    paddingHorizontal: sizes.wp_5,
  },
  input: {
    marginBottom: sizes.wp_2,
    color: COLORS.black,
    borderBottomWidth: 0.3,
    marginVertical: sizes.hp_2,
    fontSize: sizes.size15,
    fontWeight: '500',
  },
  errorInput: {
    borderColor: COLORS.red,
    borderBottomWidth: 0.3,
  },
  errorText: {
    color: COLORS.red,
    fontSize: sizes.size12,
    marginBottom: sizes.wp_2,
  },
  footer: {
    flex: sizes.flex_1,
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
