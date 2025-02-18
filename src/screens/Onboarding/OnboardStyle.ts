import { StyleSheet } from "react-native";
import { sizes } from "../../constant/size";
import { COLORS } from "../../constant/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: sizes.flex_1,
        backgroundColor: COLORS.black,
    },
    backgroundImage: {
        flex: sizes.flex_1,
        paddingHorizontal: sizes.wp_4,
        paddingVertical: sizes.hp_3,
    },
    titleText: {
        color: COLORS.white,
        fontSize: sizes.size56,
        fontWeight: '400',
    },
    subtitleText: {
        color: COLORS.white,
        fontSize: sizes.size56,
        letterSpacing: 2,
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpBtn: {
        marginTop: sizes.hp_2,
    },
    linkText: {
        color: COLORS.white,
    },
});