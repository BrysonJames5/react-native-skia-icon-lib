import React from 'react';
import styled from 'styled-components/native';
import {colorWheel, FontFamily, utility} from '@turbo/core-theme';
import {TextFieldProps} from './types';

export const TextField = ({
  label,
  size,
  type,
  accessibilityLabel,
  accessibilityRole,
  color
}: TextFieldProps) => {
  return (
    <TextWrapper
      size={size}
      type={type}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      color={color}>
      {label}
    </TextWrapper>
  );
};

const TextWrapper = styled.Text<TextFieldProps>(props => ({
  fontSize: props.size ? props.size : utility.text.md,
  color: props.color ? props.color : 'black',
  fontFamily: FontFamily[props.type],
  margin: utility.padding.xsm
}));
