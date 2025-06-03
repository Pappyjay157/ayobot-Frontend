import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

const TypewriterHeader = () => {
  const fullText = 'Ayobot – Your AI Assistant';
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typing = setInterval(() => {
      setIndex(prev => {
        if (prev < fullText.length) return prev + 1;
        clearInterval(typing);
        return prev;
      });
    }, 100);

    const blink = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(blink);
    };
  }, []);

  const displayedText = fullText.slice(0, index);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{displayedText}</Text>
        <Text style={[styles.text, { opacity: cursorVisible ? 1 : 0 }]}>|</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#1F6FEB',
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
  },
});

export default TypewriterHeader;
