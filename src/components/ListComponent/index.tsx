import React from 'react';

import { FlatList, StyleProp, ViewStyle } from 'react-native';

import {
  ButtonBrand,
  ItemContainer,
  Logo,
  Title
} from './styles';

type Item = {
  codigo: string;
  nome: string;
};

type SpecializedListProps = {
  data: Item[];
  numColumns: number;
  showImages?: boolean;
  onPressItem?: (codigo: string, nome: string) => void;
  brandIcons?: { [key: string]: any };
};

export function ListComponent({
  data,
  numColumns,
  showImages = false,
  onPressItem,
  brandIcons = {},
}: SpecializedListProps) {
  const columnWrapperStyle: StyleProp<ViewStyle> =
    numColumns > 1
      ? {
          justifyContent: 'space-between' as ViewStyle['justifyContent'],
          marginBottom: 15,
        }
      : undefined;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.codigo}
      style={{ 
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
        top: -50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}
      numColumns={numColumns}
      columnWrapperStyle={columnWrapperStyle}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const Content = (
          <ItemContainer>
            {showImages && (
              <Logo
                source={brandIcons[item.codigo] || brandIcons['default']}
                resizeMode="contain"
              />
            )}
            <Title>{item.nome}</Title>
          </ItemContainer>
        );

        if (onPressItem) {
          return (
            <ButtonBrand onPress={() => onPressItem(item.codigo, item.nome)}>
              {Content}
            </ButtonBrand>
          );
        }

        return Content;
      }}
    />
  );
}
