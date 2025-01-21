import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IconSize, sizes } from '../../constant/size'

export const GoBack = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ paddingVertical: sizes.hp_5, }} onPress={() => navigation.goBack()}>
            <MaterialIcons name='keyboard-backspace' size={25} color="#000" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})