import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Modal,
} from 'react-native';
import { shareContents } from '../../constant/Dummy';
import { COLORS } from '../../constant/Colors';
import { RemoveIcon, CameraIcon } from '../../constant/svg'; // Import CameraIcon if it's an SVG icon
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';

export const ShareContent: React.FC<{
    isVisible: boolean;
    onClose: () => void;
}> = ({ isVisible, onClose }) => {
    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
            onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <RemoveIcon />
                        </TouchableOpacity>
                        <Text style={styles.title}>Share Content</Text>
                    </View>

                    <FlatList
                        data={shareContents}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item}>
                                <View style={styles.iconContainer}>{item.icon}</View>

                                <View style={styles.itemContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    container: {
        padding: 16,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: DIMENSIONS.WIDTH * 0.6,
    },
    closeButton: {
    },
    title: {
        fontSize: sizes.size16,
        fontWeight: '400'
    },
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
