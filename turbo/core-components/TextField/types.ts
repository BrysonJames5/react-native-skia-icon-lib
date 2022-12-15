type TextFieldType = {
  header1: 24;
  header2: 20;
  header3: 18;
  caption: 8;
};

export interface TextFieldProps {
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
   * accessivility role for text field
   */
  accessibilityRole?: string;
  /**
   * size of type Utility {sm, md, lg, xlg}
   */
  size?: number;
  /**
   * type of textfont : default is regular
   */
  type?: FontFamily;

  /**
   * align text : default is center
   */
  align?: boolean;

  /**
   * color of the text from color wheel
   */
  color: string;
}

type FontFamilyMap = {
  regular: 'Roboto-Regular';
  italic: 'Roboto-Italic';
  bold: 'Roboto-Bold';
  thin: 'Roboto-Thin';
};

export type FontFamily = keyof FontFamilyMap;
