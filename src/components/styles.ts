import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

interface ContainerProps {
  withMarginTop?: boolean;
}

export const Container = styled.View<ContainerProps>`
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: center;
  padding: 0 4px 0 4px;
`;

export const StyledPicker = styled(Picker)`
  margin-bottom: -12px;
  flex: 1;
  margin-left: -8px;
`;
