import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AttechIcon,
  DocumentsIcon,
  RemoveIcon,
  SendIcon,
} from '../../constant/svg';
import { DIMENSIONS } from '../../constant/Dimensions';
import { sizes } from '../../constant/size';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ShareContent } from '../ShareContent/ShareContent';
import { messagesData, shareContents } from '../../constant/Dummy';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constant/routes';

interface Message {
  id: string;
  text?: string;
  type: 'sent' | 'received';
  audio?: string;
}

export const ChatList: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [isSend, setIsSend] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const sendMessage = () => {
    if (isSend.trim().length > 0) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: isSend,
        type: 'sent',
      };
      setMessages([...messages, newMessage]);
      setIsSend('');
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'sent' ? styles.sent : styles.received,
      ]}>
      {item.text && (
        <Text
          style={[
            styles.messageText,
            { color: item.type === 'sent' ? 'white' : 'black' },
          ]}>
          {item.text}
        </Text>
      )}
      {item.audio && (
        <View style={styles.audioContainer}>
          <Ionicons name="play-circle" size={24} color="white" />
          <Text style={styles.audioText}>{item.audio}</Text>
        </View>
      )}
    </View>
  );

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.chatInputContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AttechIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              { color: theme.text, width: DIMENSIONS.WIDTH * 0.48 },
            ]}
            placeholderTextColor="gray"
            placeholder="Write your Message"
            value={isSend}
            onChangeText={setIsSend}
          />
          <TouchableOpacity>
            <DocumentsIcon />
          </TouchableOpacity>
        </View>
        {isSend ? (
          <TouchableOpacity onPress={sendMessage}>
            <SendIcon />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconSpacing}>
              <Ionicons name="camera-outline" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="mic-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <RemoveIcon />
              </TouchableOpacity>
              <Text style={styles.title}>Share Content</Text>
            </View>
            <FlatList
              data={shareContents}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ShareContent
                  onPress={() =>
                    navigation.navigate(ROUTES.APP_STACK, {
                      screen: ROUTES.CREATE_GROUP,
                    })
                  }
                  shareContents={item}
                  isVisible={isModalVisible}
                  onClose={() => setModalVisible(false)}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  messageContainer: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#00A884',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5E5',
  },
  messageText: {
    fontSize: sizes.size12,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.wp_4,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  inputContainer: {
    width: DIMENSIONS.WIDTH * 0.6,
    height: DIMENSIONS.HEIGHT * 0.07,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.wp_3,
  },
  input: {
    fontSize: sizes.size12,
    color: 'gray',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 8,
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  closeButton: {
    alignSelf: 'flex-start',
    width: DIMENSIONS.WIDTH * 0.3,
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.size16,
    fontWeight: '400',
  },
});
