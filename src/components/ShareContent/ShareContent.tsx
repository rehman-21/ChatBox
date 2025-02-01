import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import { shareContents } from '../../constant/Dummy';
import { COLORS } from '../../constant/Colors';
import { RemoveIcon } from '../../constant/svg';
import { DIMENSIONS } from '../../constant/Dimensions';
import Svg from 'react-native-svg';

export const ShareContent: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
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
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item}>
                                <TouchableOpacity>
                                </TouchableOpacity>
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
        justifyContent: 'flex-end'
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
        width: DIMENSIONS.WIDTH * 0.7
    },
    closeButton: {
        padding: 8,
    },
    closeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',

    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContent: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
    },
});
