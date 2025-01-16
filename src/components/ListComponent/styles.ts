import styled from 'styled-components/native';

import { colors, fontFamily } from '../../styles/theme';

export const ListOfBrands = styled.FlatList`
  flex: 1;
  padding: 20px 20px 0;

  position: relative;
  top: -50px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${colors.white[700]};
`;

export const ButtonBrand = styled.TouchableOpacity`
  flex: 1;
  max-width: 48%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${colors.gray[300]};
  padding: 20px;
  margin-bottom: 20px;
`;

export const TextBrand = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: ${fontFamily.poppins};
  color: ${colors.black[100]};
  text-align: center;
`;

export const ItemContainer = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.black[100]};
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
`;