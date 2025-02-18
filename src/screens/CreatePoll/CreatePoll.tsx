import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { CustomPoll, H1, Header } from '../../components';
import { COLORS } from '../../constant/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';

export const CreatePoll: React.FC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.Skylight_green,
                paddingHorizontal: sizes.wp_5,
                paddingVertical: sizes.hp_3,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <Header title="Create Poll" textStyle={{ color: COLORS.black }} />
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.white,
                        width: DIMENSIONS.WIDTH * 0.12,
                        height: DIMENSIONS.HEIGHT * 0.06,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                    }}>
                    <AntDesign name="close" size={20} color={'#000'} />
                </TouchableOpacity>
            </View>
            <H1 styleText={{ fontSize: sizes.size36 }} TITLE={'What would you\nlike to  work?'} />
            <CustomPoll />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
