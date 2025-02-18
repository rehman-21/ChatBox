import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { sizes } from '../../constant/size'

export const GroupDescription: React.FC = () => {
    return (
        <View style={styles.section}>
        //         <Text style={styles.label}>Group Description</Text>
        //         <Text style={styles.title}>Make Group for{'\n'}Team Work</Text>
        //         <View style={styles.tags}>
                {/* //             <Tag text="Group work" />
        //             <Tag text="Team relationship" /> */}
        //         </View>
        //     </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: sizes.size18
    }
})