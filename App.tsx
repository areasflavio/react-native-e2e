import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Plan } from './src/screens/Plan';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Plan />
    </>
  );
}
