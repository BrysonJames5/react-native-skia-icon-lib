/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {CoreButton, TextField} from './turbo/core-components';
import React, {useTransition, type PropsWithChildren} from 'react';
import {
  Button,
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import {utility} from '@turbo/core-theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white
        }}>
        <CoreButton
          label="Test"
          onPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          onLongPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          colorTheme={''}
          buttonType="secondary"
        />
        <CoreButton
          label="Test"
          onPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          onLongPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          colorTheme={''}
          buttonType="primary"
        />
        <CoreButton
          label="Test"
          onPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          onLongPress={function (event?: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}
          colorTheme={''}
          buttonType="tiertiary"
        />
        <TextField
          label="testing the output of this "
          size={utility.text.xlg}
          type="italic"
          accessibilityRole={''}
          color={''}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
