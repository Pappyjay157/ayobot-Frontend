import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './screens/ChatScreen';
import AyobotIntro from './components/AyobotIntro';
import SignupScreen from './screens/SignupScreen';


const Stack = createStackNavigator();

export default function App() {
  const [showIntro, setShowIntro] = useState(true);


  if (showIntro){
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0D1117' }}>
        <StatusBar barStyle="light-content" />
        <AyobotIntro onDone={() => setShowIntro(false)} />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
