import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function WelcomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Neuropunk Sandbox</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
