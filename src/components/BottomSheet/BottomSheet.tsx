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
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // snap points
    const snapPoints = useMemo(() => ["100%", "100%"], []);

    // Open the bottom sheet automatically on render
    useEffect(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    onChange={handleSheetChanges}
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
        padding: 24,
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
