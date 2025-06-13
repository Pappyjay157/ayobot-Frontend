import styles from "../styles";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput, StyleSheet, Animated, PanResponder, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';


interface FormData {
    email: string;
    password: string;
    }

type RootStackParamList = {
  Signup: undefined;
  Signin: undefined;
  
};

const SigninScreen: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const tilt = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
      useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: false,
        }).start();
      }, []);
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
        const bounceAnim = useRef(new Animated.Value(50)).current;
        useEffect(() => {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 900,
                useNativeDriver: false,
                }),
                Animated.spring(bounceAnim, {
                toValue: 0,
                friction: 3, // lower friction = more bounce
                tension: 100,
                useNativeDriver: false,
                }),
            ]).start();
            }, []);

            const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
        <Animated.Text
            style={[
                styles.title,
                {
                opacity: fadeAnim,
                transform: [{ translateY: bounceAnim }],
                },
            ]}
            >
            Welcome Back
            </Animated.Text>

            <Animated.Text
            style={[
                styles.subtitle,
                {
                opacity: fadeAnim,
                transform: [{ translateY: bounceAnim }],
                },
            ]}
            >
            Ready to continue your coding journey with Ayobot.
            </Animated.Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              value={formData.email}
              onChangeText={(value) => handleChange('email', value)}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
                />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#888"
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.secondaryButtonText}>Dont have an account? Sign up</Text>
                </TouchableOpacity>
        </Animated.View>
        </KeyboardAvoidingView>
        </LinearGradient>


    );
}
export default SigninScreen;