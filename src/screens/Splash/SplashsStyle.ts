import {StyleSheet} from 'react-native';
import {sizes} from '../../constant/size';

export const styles = StyleSheet.create({
  container: {
    flex: sizes.flex_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: sizes.size26,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});
