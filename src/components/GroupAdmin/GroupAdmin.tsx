import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PNG } from '../../constant/svg';
import { sizes } from '../../constant/size';
interface propsGroup {
    name: string
    role: string
}

export const GroupAdmin: React.FC<propsGroup> = ({ name, role }) => (
    <TouchableOpacity style={styles.section}>
        <View style={styles.adminContainer}>
            <Image source={require('../../asset/images/User-3.png')} style={styles.adminImage} />
            <View>
                <Text style={styles.adminName}>{name}</Text>
                <Text style={styles.adminRole}>{role}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    section: {
        marginVertical: sizes.hp_3
    },

    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    adminContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    adminImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    adminName: {
        fontWeight: 'bold',
    },
    adminRole: {
        color: '#888',
    },
});
