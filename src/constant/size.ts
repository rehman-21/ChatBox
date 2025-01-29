import { Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
export const IconSize = (num: number) => Math.min(width, height) * num;

export const useSafeArea = () => {
  return useSafeAreaInsets();
};
export const sizes = {
  // *<===========("Icon Sizes")==========================>
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
  size7: 7,
  size9: 9,
  size10: 10,
  size12: 12,
  size14: 14,
  size15: 15,
  size16: 16,
  size17: 17,
  size18: 18,
  size20: 20,
  size22: 22,
  size24: 24,
  size26: 26,
  size28: 28,
  size30: 30,
  size36: 36,
  size40: 40,
  size44: 44,
  // *<===========("Icon Width")==========================>
  wp_1: wp(1),
  wp_2: wp(2),
  wp_3: wp(3),
  wp_4: wp(4),
  wp_5: wp(5),
  wp_6: wp(6),
  wp_7: wp(7),
  wp_8: wp(8),
  wp_9: wp(9),
  wp_10: wp(10),
  wp_11: wp(11),
  wp_12: wp(12),
  wp_13: wp(13),
  wp_15: wp(15),
  wp_20: wp(20),
  wp_25: wp(25),
  wp_27: wp(27),
  wp_30: wp(30),
  wp_35: wp(35),
  wp_40: wp(40),
  wp_43: wp(43),
  wp_45: wp(45),
  wp_50: wp(50),
  wp_55: wp(55),
  wp_60: wp(60),
  wp_65: wp(65),
  wp_70: wp(70),
  wp_80: wp(80),
  wp_84: wp(84),
  wp_90: wp(90),
  wp_92: wp(92),
  wp_94: wp(94),
  wp_100: wp(100),

  wp_p15: wp(1.5),
  wp_p25: wp(2.5),

  // *<===========("Icon Height")==========================>

  hp_1: hp(1),
  hp_2: hp(2),
  hp_3: hp(3),
  hp_4: hp(4),
  hp_5: hp(5),
  hp_6: hp(6),
  hp_7: hp(7),
  hp_8: hp(8),
  hp_10: hp(10),
  hp_12: hp(12),
  hp_15: hp(15),
  hp_17: hp(17),
  hp_20: hp(20),
  hp_25: hp(25),
  hp_32: hp(32),
  hp_40: hp(40),
  hp_50: hp(50),
  hp_65: hp(65),
  hp_68: hp(68),
  hp_70: hp(70),
  hp_98: hp(98),
  hp_100: hp(100),

  hp_p05: hp(0.5),
  hp_p15: hp(1.5),

  // *<===========("Flex Size")==========================>
  flex_p1: 0.1,
  flex_p3: 0.3,
  flex_p4: 0.4,
  flex_p6: 0.6,
  flex_1: 1,
  screenSpacingHorizontal: wp(6),

  //   *<================("Radius")===================>
};
