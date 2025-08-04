// App.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });
    return unsubscribe;
  }, []);

  if (checkingAuth) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      {user ? (
        <Text>Welcome, {user.email}</Text>
      ) : (
        <Text>Please log in</Text>
      )}
    </View>
  );
}
