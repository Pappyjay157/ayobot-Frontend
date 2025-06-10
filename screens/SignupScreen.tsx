import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface FormData{
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

    const handleChange = (name: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log(formData)
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(text) => handleChange('name', text)}
                style={styles.input}
                

                />
            <TextInput
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                autoCapitalize='none'
                keyboardType="email-address"
                style={styles.input}
                />
            <TextInput
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChangeText={(text) => handleChange('confirmPassword', text)}
                secureTextEntry
                style={styles.input}
            />

            <Button title="Sign Up" onPress={handleSubmit} />
            <Button title="Already have an account? Login" />

            </View>



    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    justifyContent: 'center',
    padding: 20,
  },
  input: { backgroundColor: '#fff', marginBottom: 12, padding: 10, borderRadius: 5 },
});
export default SignupScreen;
