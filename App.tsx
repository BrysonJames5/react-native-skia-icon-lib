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
import {FontFamily, utility} from '@turbo/core-theme';

const App = () => {
  const press = () => {
    console.log('press');
  };
  return (
    <SafeAreaView>
      <View>
        {/* <CoreButton
          label="Test"
          onPress={press}
          buttonType="secondary"
          textType="thin"
        />
        <CoreButton
          label="Test"
          onPress={press}
          buttonType="primary"
          textType="regular"
        /> */}
        <CoreButton
          label="Test"
          onPress={press}
          buttonType="primary"
          textType="bold"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
