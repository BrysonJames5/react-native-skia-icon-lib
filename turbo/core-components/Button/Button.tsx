import React from 'react';
import {ButtonProps, ButtonType} from './types';
import {Button, Dimensions, Pressable, Text} from 'react-native';
import styled, {View} from 'styled-components/native';
import {colorWheel, utility} from '@turbo/core-theme';
import {TextField} from '../TextField';
import {ButtonColorPallatte} from '.';

export const CoreButton = ({
  label,
  onPress,
  disabled,
  buttonType,
  padded = false
}: ButtonProps) => {
  // return <Button title={label} onPress={pressFunction} />;
  console.log(buttonType);
  console.log(ButtonColorPallatte[buttonType].background);
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <ButtonContainer color={ButtonColorPallatte[buttonType]} padded>
        <TextField
          label={'Testing Button Label'}
          size={utility.text.md}
          color={ButtonColorPallatte[buttonType].text}
          type="italic"
        />
      </ButtonContainer>
    </Pressable>
  );
};

const ButtonContainer = styled.View(props => ({
  border: props.color.borderColor,
  borderRadius: utility.borderRadius.button,
  backgroundColor: props.color.background,
  alignItems: 'center',
  margin: utility.padding.lg,
  padding: utility.padding.lg
}));
