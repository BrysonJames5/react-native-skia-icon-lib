import {FontFamily} from '@turbo/core-theme';
import {colorWheel} from 'turbo/core-theme';
type ColorDictionary = typeof colorWheel;

export type ColorDict = keyof ColorDictionary;

export default {
  regular: 'Roboto-Regular',
  italic: 'Roboto-Italic',
  bold: 'Roboto-Bold',
  thin: 'Roboto-Thin'
} as const;
