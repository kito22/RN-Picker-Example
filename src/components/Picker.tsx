import {PickerProps} from '@react-native-picker/picker';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {Container, StyledPicker} from './styles';

interface PickerComponentProps extends PickerProps {
  withMarginTop?: boolean;
  options: PickerItemProps[];
  onValueChange: (value: ItemValue, index?: number) => void;
}

interface PickerItemProps {
  label: string;
  value: string;
}

export function Select({
  withMarginTop = false,
  options,
  onValueChange,
  ...rest
}: PickerComponentProps): JSX.Element {
  return (
    <Container withMarginTop={withMarginTop}>
      <StyledPicker
        onValueChange={onValueChange}
        dropdownIconColor="#fff"
        {...rest}>
        {options.map(item => (
          <StyledPicker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            color="#fff"
          />
        ))}
      </StyledPicker>
    </Container>
  );
}
