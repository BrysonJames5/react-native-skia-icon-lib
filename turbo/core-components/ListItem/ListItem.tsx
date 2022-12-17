import {utility} from '@turbo/core-theme';
import React from 'react';
import {Animated, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {TextField} from '../TextField';
import {ListItemProps} from './types';

export const ListItem = ({borderTop}: ListItemProps) => {
  return (
    <Pressable>
      <ListItemContainer borderTop>
        <TextField label="test" />
      </ListItemContainer>
    </Pressable>
  );
};

const ListItemContainer = styled(Animated.View)(props => ({
  borderTopWidth: props.borderTop && '1px',
  borderColor: props.borderTop && 'grey',
  padding: utility.padding.md,
  alignItems: 'flex-start'
}));
