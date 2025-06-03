import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View, Text } from 'react-native';

const { height } = Dimensions.get('window');

const HackingBackground = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -height,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[styles.overlay, { transform: [{ translateY }] }]}
    >
      <View style={styles.lines}>
        {Array.from({ length: 40 }).map((_, i) => (
          <TextLine key={i} />
        ))}
      </View>
    </Animated.View>
  );
};

const TextLine = () => {
  const line = Array.from({ length: 30 })
    .map(() => (Math.random() > 0.5 ? '1' : '0'))
    .join(' ');
  return (
    <View style={styles.line}>
      <Animated.Text style={styles.text}>{line}</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0D1117',
    opacity: 0.12,
    zIndex: 1,
  },
  lines: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 16,
  },
  text: {
    color: '#1F6FEB', // blue theme color
    fontSize: 12,
    fontFamily: 'Courier',
  },
});

export default HackingBackground;
