import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export const BottomSheet = ({ children }) => {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(true);

    // snap points
    const snapPoints = useMemo(() => ["100%", "100%"], []);

    // Open the bottom sheet automatically on render
    useEffect(() => {
        bottomSheetModalRef.current?.present();
    }, []);



    // renders
    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        {children}
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
});
