import {colorWheel} from '@turbo/core-theme';
export default {
  primary: {
    text: colorWheel.analogous.white,
    borderColor: colorWheel.analogous.first,
    background: colorWheel.analogous.first
  },
  secondary: {
    text: colorWheel.analogous.second,
    borderColor: colorWheel.analogous.second,
    background: colorWheel.analogous.white
  },
  tiertiary: {
    text: colorWheel.analogous.white,
    borderColor: colorWheel.analogous.third,
    background: colorWheel.analogous.third
  }
} as const;
