import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constant/Colors';
import { sizes } from '../../constant/size';
import { DIMENSIONS } from '../../constant/Dimensions';
interface membersProps {
    onPerss: () => void
}

export const AddMembers: React.FC<membersProps> = ({ onPerss }) => {
    return (
        <TouchableOpacity onPress={onPerss}
            style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                width: DIMENSIONS.WIDTH * 0.2,
                height: DIMENSIONS.WIDTH * 0.2,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                margin: 5
            }}>
            <Text style={{ color: COLORS.black_gray, fontSize: sizes.size18 }}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});
