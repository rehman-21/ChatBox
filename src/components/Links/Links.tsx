import { StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../CoreComponent/ThemedText';

interface LinksProps {
    account: string;
    link: string;
    linkStyle: TextStyle;
}

export const Links: React.FC<LinksProps> = ({ account, link, linkStyle }) => {
    return (
        <View style={styles.container}>
            <ThemedText style={{ color: '#B9C1BE', fontSize: 14 }}>{account}</ThemedText>
            <TouchableOpacity>
                <ThemedText style={[styles.linkText, linkStyle]}>{link}</ThemedText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    linkText: {
        fontWeight: '600',
    },
});
