import React, { useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import { Message } from '../types/message';
import ChatBubble from '../components/ChatBubble';
import MessageInput from '../components/MessageInput';
import TypewriterHeader from '../components/TypewriterHeader';
import HackingBackground from '../components/HackingBackground';

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi, I'm Ayobot. Ask me anything about programming.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const res = await axios.post('http://192.168.0.45:8000/chat', { message: text });
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: res.data.reply || "⚠️ No response from Ayobot.",
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          sender: 'bot',
          text: '❌ Ayobot encountered an error. Please try again.',
        },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
        {isTyping && <HackingBackground />}
          <TypewriterHeader />
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ChatBubble message={item} />}
            contentContainerStyle={{ paddingVertical: 10 }}
          />
          {isTyping && <ActivityIndicator size="small" color="#1F6FEB" style={{ marginBottom: 8 }} />}
          <MessageInput onSend={sendMessage} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
});

export default ChatScreen;
