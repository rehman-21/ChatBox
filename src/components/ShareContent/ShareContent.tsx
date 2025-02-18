import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Modal,
} from 'react-native';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
interface PropsShare {
    onPress: () => void
}

export const ShareContent: React.FC<PropsShare> = ({ shareContents, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.iconContainer}>{shareContents.icon}</View>

            <View style={styles.itemContent}>
                <Text style={styles.itemName}>{shareContents.name}</Text>
                <Text style={styles.itemDescription}>{shareContents.description}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 12,
        width: DIMENSIONS.WIDTH * 0.12,
        height: DIMENSIONS.HEIGHT * 0.06,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    itemContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        padding: 16,
        width: '100%'
    },
    itemName: {
        fontSize: sizes.size16,
        fontWeight: '600',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
    },
});
