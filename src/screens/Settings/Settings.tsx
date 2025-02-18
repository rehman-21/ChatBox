import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from '../../components/Button/Button';
import { AuthContext } from '../../Context/AuthContext';
import { styles } from './SettingStyle';

export const Settings = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <CustomButton title="Log Out" onPress={logout} />
        </View>
    );
};

