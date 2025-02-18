import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { invitedMembers } from '../../constant/Dummy'
import { MemberItem } from '../MemberItem/MemberItem'

export const InvitedMembers: React.FC = () => {
    return (

        <View style={styles.section}>
            <Text style={styles.label}>Invited Members</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 20
    },

    label: {
        fontSize: 14, color: '#888',
        marginBottom: 5
    },
})