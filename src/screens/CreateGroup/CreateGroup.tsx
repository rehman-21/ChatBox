import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const invitedMembers = [
    { id: '1', image: require('@assets/user1.png') },
    { id: '2', image: require('@assets/user2.png') },
    { id: '3', image: require('@assets/user3.png') },
    { id: '4', image: require('@assets/user4.png') },
    { id: '5', image: require('@assets/user5.png') },
];

const CreateGroupScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Create Group" />
            <GroupDescription />
            <GroupAdmin />
            <InvitedMembers />
            <Button mode="contained" style={styles.createButton}>Create</Button>
        </View>
    );
};

const Header = ({ title }) => (
    <View style={styles.header}>
        <Icon name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);

const GroupDescription = () => (
    <View style={styles.section}>
        <Text style={styles.label}>Group Description</Text>
        <Text style={styles.title}>Make Group for Team Work</Text>
        <View style={styles.tags}>
            <Tag text="Group work" />
            <Tag text="Team relationship" />
        </View>
    </View>
);

const Tag = ({ text }) => (
    <View style={styles.tag}>
        <Text style={styles.tagText}>{text}</Text>
    </View>
);

const GroupAdmin = () => (
    <View style={styles.section}>
        <Text style={styles.label}>Group Admin</Text>
        <View style={styles.adminContainer}>
            <Image source={require('@assets/admin.png')} style={styles.adminImage} />
            <View>
                <Text style={styles.adminName}>Rashid Khan</Text>
                <Text style={styles.adminRole}>Group Admin</Text>
            </View>
        </View>
    </View>
);

const InvitedMembers = () => (
    <View style={styles.section}>
        <Text style={styles.label}>Invited Members</Text>
        <FlatList
            horizontal
            data={[...invitedMembers, { id: 'add' }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                item.id === 'add' ? <AddMemberButton /> : <MemberItem image={item.image} />
            )}
        />
    </View>
);

const MemberItem = ({ image }) => (
    <View style={styles.memberContainer}>
        <Image source={image} style={styles.memberImage} />
        <TouchableOpacity style={styles.addIcon}>
            <Icon name="add-circle" size={20} color="#000" />
        </TouchableOpacity>
    </View>
);

const AddMemberButton = () => (
    <TouchableOpacity style={styles.addMemberButton}>
        <Icon name="add" size={24} color="#000" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
    section: { marginBottom: 20 },
    label: { fontSize: 14, color: '#888', marginBottom: 5 },
    title: { fontSize: 22, fontWeight: 'bold' },
    tags: { flexDirection: 'row', marginTop: 10 },
    tag: { backgroundColor: '#E0F7FA', padding: 8, borderRadius: 15, marginRight: 10 },
    tagText: { color: '#00796B' },
    adminContainer: { flexDirection: 'row', alignItems: 'center' },
    adminImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    adminName: { fontWeight: 'bold' },
    adminRole: { color: '#888' },
    memberContainer: { alignItems: 'center', marginRight: 10 },
    memberImage: { width: 50, height: 50, borderRadius: 25 },
    addIcon: { position: 'absolute', bottom: 0, right: 0 },
    addMemberButton: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center' },
    createButton: { marginTop: 20, backgroundColor: '#00C853' },
});

export default CreateGroupScreen;
