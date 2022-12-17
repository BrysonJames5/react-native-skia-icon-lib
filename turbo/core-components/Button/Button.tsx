import React, {useCallback, useEffect, useState} from 'react';
import {ButtonProps} from './types';
import {Pressable, Animated} from 'react-native';
import styled from 'styled-components/native';
import {utility} from '@turbo/core-theme';
import {TextField} from '../TextField';
import {ButtonColorPallatte} from '.';

export const CoreButton = ({
  label,
  onPress,
  disabled,
  buttonType,
  textType
}: ButtonProps) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const animationHelper = useCallback(() => {
    if (disabled) return -1;
    return buttonPressed ? 1 : 0;
  }, [disabled, buttonPressed]);
  const [animatedButtonPress, setAnimatedButtonPress] = useState(
    new Animated.Value(0)
  );

  const onPressInHandler = () => {
    if (!disabled) {
      handleAnimation(1);
      setButtonPressed(true);
    }
  };
  const onPressOutHandler = () => {
    if (!disabled) {
      handleAnimation(0);
      setButtonPressed(false);
    }
  };

  const handleAnimation = (value: number) => {
    Animated.timing(animatedButtonPress, {
      useNativeDriver: false,
      toValue: value,
      duration: 100
    }).start();
  };
  // TODO implement button color pallette
  const buttonInterpolation = animatedButtonPress.interpolate({
    inputRange: [0, 1],
    outputRange: [
      ButtonColorPallatte[buttonType].background,
      ButtonColorPallatte[buttonType].text
    ]
  });

  const animatedStyle = {backgroundColor: buttonInterpolation};

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}>
      <ButtonContainer
        color={ButtonColorPallatte[buttonType]}
        style={{...animatedStyle}}>
        <TextField
          label={label}
          size={utility.text.md}
          color={ButtonColorPallatte[buttonType].text}
          type={textType}
        />
      </ButtonContainer>
    </Pressable>
  );
};

const ButtonContainer = styled(Animated.View)(props => ({
  border: props.color.borderColor,
  borderRadius: utility.borderRadius.button,
  alignItems: 'center',
  padding: utility.padding.lg
}));
