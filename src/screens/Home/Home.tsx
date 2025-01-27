import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/Button/Button';
import { ThemedText } from '../../CoreComponent/ThemedText';
import { CallSheet } from '../../components';

export const Home = () => {


    return (
        <>
            <View style={{ flex: 1, }}>
                <Text>Home Screen</Text>
            </View>

            <CallSheet />

        </>
    );
};

const styles = StyleSheet.create({});
