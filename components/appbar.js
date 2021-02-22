import React from 'react';
import { Header } from 'react-native-elements';
export default function Appbar() {
  return (
    <Header
      backgroundColor={'lime'}
      centerComponent={{
        text: 'Weather Detector App',
        style: { color: '#fff', fontSize: 20 },
      }}
    />
  );
}
