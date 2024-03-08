import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from  './screen/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
