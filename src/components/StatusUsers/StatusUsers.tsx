import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { chatData } from '../../constant/Dummy';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { COLORS } from '../../constant/Colors';

export const StatusUsers = () => {
    const renderStatus = ({ item }) => (
        <TouchableOpacity style={styles.statusItem}>
            <Image source={item.image} style={styles.statusImage} />
            <ThemedText style={styles.statusName}>{item.name}</ThemedText>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={chatData.statuses}
            renderItem={renderStatus}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statusList}
        />
    );
};

const styles = StyleSheet.create({
    statusList: {
        marginTop: sizes.hp_4
    },
    statusItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    statusImage: {
        width: DIMENSIONS.WIDTH * 0.14,
        height: DIMENSIONS.HEIGHT * 0.07,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: COLORS.highlight,
    },
    statusName: {
        marginTop: 5,
        fontSize: 12,
    },
});
