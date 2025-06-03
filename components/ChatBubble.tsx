// components/ChatBubble.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message } from '../types/message';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ChatBubble = ({ message }: { message: Message }) => {
  const isUser = message.sender === 'user';
  const isCode = message.text.trim().startsWith('```') && message.text.trim().endsWith('```');

  const getCodeContent = (text: string) => {
    return text.replace(/```/g, '').trim();
  };

  return (
    <View style={[styles.bubbleContainer, isUser ? styles.userAlign : styles.botAlign]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
        {isCode ? (
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            highlighter="hljs"
            customStyle={{ padding: 12, borderRadius: 10 }}
          >
            {getCodeContent(message.text)}
          </SyntaxHighlighter>
        ) : (
          <Text style={styles.messageText}>{message.text}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  userAlign: { alignItems: 'flex-end' },
  botAlign: { alignItems: 'flex-start' },
  bubble: {
    borderRadius: 12,
    padding: 10,
    maxWidth: '85%',
  },
  userBubble: {
    backgroundColor: '#1F6FEB',
  },
  botBubble: {
    backgroundColor: '#2D3748',
  },
  messageText: {
    color: '#E5E5E5',
    fontSize: 15,
  },
});

export default ChatBubble;
