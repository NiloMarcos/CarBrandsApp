import styled from "styled-components/native";

import { colors, fontFamily } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors.white[700]};

  padding: 0 20px;
`;

export const ErrorMessage = styled.Text`
  width: 100%;
  margin-bottom: 10px;

  color: #FF0000;
  font-size: 14px;
  font-weight: 400;

  text-align: left;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 16px;
  margin: 0 0 16px;

  color: ${colors.black[100]};

  border-radius: 6px;
  border: 2px solid ${colors.gray[300]};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 16px;
  margin: 0 0 16px;

  border-radius: 6px;
  background-color: ${colors.blue[700]};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${fontFamily.poppins};
  color: ${colors.white[700]};
  text-transform: uppercase;
`;