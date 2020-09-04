import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

// font
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';

// fetch fonts
const fetchFonts = () => {
  Font.loadAsync({
    'PingFangSC-bold': require('./assets/fonts/PingFang SC Bold.ttf'),
    'PingFangSC-medium': require('./assets/fonts/PingFang SC Medium.ttf'),
    'PingFangSC-regular': require('./assets/fonts/PingFang SC Regular.ttf'),
    'PingFangSC-semibold': require('./assets/fonts/PingFang SC Semibold.ttf'),
    'SFProDisplay-bold': require('./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf'),
    'SFProDisplay-light': require('./assets/fonts/FontsFree-Net-SFProDisplay-Light-1.ttf'),
    'SFProDisplay-semibold': require('./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf'),
  });
};

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // load prerequisite data
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={() => {
          fetchFonts();
        }}
        onFinish={setIsDataLoaded.bind(this, true)}
        onError={err => Alert.alert(err)}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Header />
      </View>
    </TouchableWithoutFeedback>
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
