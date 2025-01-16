import styled from 'styled-components/native';

import { colors, fontFamily } from '../../styles/theme';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  
  padding: 0 20px 50px;

  padding-top: 30px;

  background: ${colors.blue[700]};

  height: 200px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;

  margin: 24px 0;
`;

export const Brand = styled.View`
  flex: 1;
  
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const Interprise = styled.Text`
  font-size: 20px;
  font-family: ${fontFamily.poppinsBold};
  color: ${colors.white[700]};
  font-weight: bold;
`;

export const ButtnoProfile = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  background-color: ${colors.white[700]};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
