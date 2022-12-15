import {ButtonColorPallatte} from '.';
import {GestureResponderEvent} from 'react-native';

export interface ButtonProps {
  /**
   *text to be displayed on the button
   */
  label: string;

  /**
   * prop to toggle the button between enabled and disabled
   */
  disabled?: boolean;

  /**
   * accessibility label for custom accessibility announcing
   */
  accessibilityLabel?: string;

  /**
   * type of button can be primary, secondary, or tiertiary
   */
  buttonType: ButtonType;

  /**
   * onPress function to be envoked on a tap event
   */
  onPress: (event?: GestureResponderEvent) => void;

  /**
   * onLongPRess function to be envoked on long press event
   */
  onLongPress: (event?: GestureResponderEvent) => void;

  /**
   * color theme for button
   */
  colorTheme: string;

  /**
   * give spacing from outer edges
   */
  padded?: boolean;
}

export type ButtonType = keyof typeof ButtonColorPallatte;
