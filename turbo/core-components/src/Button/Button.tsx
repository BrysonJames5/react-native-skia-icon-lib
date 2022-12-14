import React from 'react';
import {ButtonProps} from './types';
import {Button, Dimensions, Pressable, Text} from 'react-native';
import styled, {View} from 'styled-components/native';
import {utility} from '../../../core-theme';

export const CoreButton = ({
  label,
  onPress,
  onLongPress,
  type,
  disabled
}: ButtonProps) => {
  const pressFunction = () => {
    console.log('PRESSED');
  };
  // return <Button title={label} onPress={pressFunction} />;

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <ButtonContainer color="green">
        <Text>HELLO</Text>
      </ButtonContainer>
    </Pressable>
  );
};

type ButtonContainerProps = {
  width?: string;
  height?: string;
  color?: string;
};

const ButtonContainer = styled.View<ButtonProps>(props => ({
  border: `${utility.padding.xsm}px solid ${props.color}`,
  alignItems: 'center',
  borderRadius: utility.borderRadius.button,
  margin: utility.padding.xlg
}));
