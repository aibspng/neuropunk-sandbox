import { app, auth, db } from './firebase/firebaseConfig.js';
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text style={styles.title}>🧠 Neuropunk Sandbox</Text>
      <Text style={styles.subtitle}>Mobile AI Simulation Hub</Text>
      <Text style={styles.status}>Status: Connected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#00FFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  status: {
    color: '#0f0',
    fontSize: 14,
  },
});

