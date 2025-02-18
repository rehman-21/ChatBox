import React, { useCallback, useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { AddMembers, GroupAdmin, H1, H2, Header, Tag } from '../../components';
import { COLORS } from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../constant/size';
import CustomButton from '../../components/Button/Button';
import { invitedMembers } from '../../constant/Dummy';
import { MemberItem } from '../../components/MemberItem/MemberItem';
import { ROUTES } from '../../constant/routes';

export const CreateGroupScreen: React.FC = () => {
  const navigation = useNavigation();

  const [invitMembers, setInvitedMembers] = useState([]);
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleSelectMember = (member) => {
    if (!invitMembers.some((m) => m.id === member.id)) {
      setInvitedMembers((prev) => [...prev, member]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        name="arrow-back"
        size={20}
        color={COLORS.black_gray}
        onPress={handleGoBack}
        textStyle={styles.headerText}
        title="create group"
      />
      <H2 styleText={styles.groupDescription} TITLE="Group description" />
      <H1 styleText={styles.mainTitle} TITLE={'Make Group\nfor Team Works'} />
      <View style={styles.tagsContainer}>
        <Tag text="Team Works" />
        <Tag text="Team relationship" />
      </View>
      <H2 styleText={styles.sectionTitle} TITLE="Group Admin" />
      <GroupAdmin name="Rashid Khan" role="Group Admin" />
      <H2 styleText={styles.sectionTitle} TITLE="Invited Members" />

      <FlatList
        numColumns={4}
        data={[...invitedMembers, { id: 'add' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          item.id === 'add' ? <AddMembers onPerss={handleSelectMember} /> : <MemberItem image={item.image} />
        )}
      />
      <CustomButton
        onPress={() => navigation.navigate(ROUTES.APP_STACK, { screen: ROUTES.CREATE_POLL })}
        title="Create"
        textStyle={styles.btnText}
        buttonStyle={styles.btn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: sizes.flex_1,
    backgroundColor: COLORS.white,
    paddingVertical: sizes.hp_3,
    paddingHorizontal: sizes.wp_4,
  },
  headerText: {
    color: COLORS.black,
  },
  groupDescription: {
    color: COLORS.off_white_gray,
    marginVertical: sizes.hp_2,
    fontSize: sizes.size16,
  },
  mainTitle: {
    color: COLORS.black_gray,
    fontSize: sizes.size36,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.hp_3,
  },
  sectionTitle: {
    color: COLORS.off_white_gray,
    fontSize: sizes.size16,
  },
  btn: {
    backgroundColor: COLORS.white_green
  },
  btnText: {
    color: COLORS.white
  }
});
