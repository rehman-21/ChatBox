import {StyleSheet} from 'react-native';
import {sizes} from '../../constant/size';
import {COLORS} from '../../constant/Colors';
import {DIMENSIONS} from '../../constant/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: sizes.flex_1,
  },
  headerContainer: {
    backgroundColor: COLORS.black,
    paddingHorizontal: sizes.wp_4,
    paddingVertical: sizes.hp_3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.wp_1,
  },
  searchButton: {
    width: DIMENSIONS.WIDTH * 0.1,
    height: DIMENSIONS.HEIGHT * 0.05,
    borderWidth: 0.2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerTitle: {
    color: COLORS.white,
  },
  statusList: {
    marginTop: sizes.hp_4,
  },
  chatList: {
    paddingHorizontal: sizes.wp_5,
    marginBottom: sizes.hp_5,
    flex: sizes.flex_1,
  },
});
