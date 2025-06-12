import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Animated, PanResponder, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 3D tilt animation
  const tilt = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: false,
    }).start();
  }, []);

  // PanResponder for 3D tilt effect
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: tilt.x, dy: tilt.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(tilt, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    
    console.log(formData);
  };

  return (
    <LinearGradient
      colors={['#0f2027', '#2c5364', '#1F6FEB']}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.formContainer,
            {
              opacity: fadeAnim,
              transform: [
                { perspective: 800 },
                { rotateY: tilt.x.interpolate({ inputRange: [-50, 50], outputRange: ['-15deg', '15deg'] }) },
                { rotateX: tilt.y.interpolate({ inputRange: [-50, 50], outputRange: ['15deg', '-15deg'] }) },
              ],
            },
          ]}
        >
          <Text style={styles.title}>Sign Up to Ayobot</Text>
          <Text style={styles.subtitle}>Your AI programming assistant</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#7FDBFF"
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#7FDBFF"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7FDBFF"
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#7FDBFF"
            value={formData.confirmPassword}
            onChangeText={(text) => handleChange('confirmPassword', text)}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => console.log('Go to Login')}>
            <Text style={styles.secondaryButtonText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};


export default SignupScreen;