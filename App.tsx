import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ChatScreen from './screens/ChatScreen';
import AyobotIntro from './components/AyobotIntro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0D1117' }}>
      <StatusBar barStyle="light-content" />
      {showIntro ? (
        <AyobotIntro onDone={() => setShowIntro(false)} />
      ) : (
        <ChatScreen />
      )}
    </SafeAreaView>
  );
}
