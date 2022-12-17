import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styled from 'styled-components/native';
import {CoreButton, Icon} from '@turbo/core-components';
import {FontFamily} from '@turbo/core-theme';
console.log(FontFamily.bold);
import {Canvas, ImageSVG, Skia, useSVG} from '@shopify/react-native-skia';

export const IconTest = () => {
  // Alternatively, you can pass an SVG URL directly
  // for instance: const svg = useSVG("https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg");
  // const svg = useSVG(
  //   require('https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg')
  // );
  const svg = Skia.SVG.MakeFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>`
  )!;
  return (
    <Canvas style={{flex: 1, borderWidth: 1, borderColor: 'black'}}>
      {svg && <ImageSVG svg={svg} x={0} y={0} width={256} height={256} />}
    </Canvas>
  );
};
const App = () => {
  const press = () => {
    console.log('press');
  };
  return (
    <>
      <SafeAreaView>
        <CoreButton
          label="Test"
          onPress={press}
          buttonType="primary"
          textType="regular"
        />
      </SafeAreaView>
    </>
    // <IconTest />
  );
};

const Spacer = styled.View({});

export default App;
