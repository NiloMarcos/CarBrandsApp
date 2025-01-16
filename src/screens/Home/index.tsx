import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';

import { brandIcons } from '../../../assets/brand-icons/brandIcons';

import { ListComponent } from '../../components/ListComponent';

import api from "../../services/api";

import {
  Container
} from './styles';

interface Brand {
  codigo: string;
  nome: string;
}

export function Home() {
  const [data, setData] = useState<Brand[]>([]);
  
  const navigation = useNavigation();

  async function handleBrands() {
    try {
      const response = await api.get<Brand[]>('/carros/marcas');
      setData(response.data);
    } catch (error) {
      console.error('Error when searching for brands:', error);
    }
  }

  function handleNavigateToModel(id: string, nome: string) {
    navigation.navigate('Model', { id, nome });
  }

  useEffect(() => {
    handleBrands();
  }, []);

  return (
    <Container>
      <Header />

      <ListComponent
        data={data}
        showImages={true}
        onPressItem={(codigo, nome) => handleNavigateToModel(codigo, nome)}
        brandIcons={brandIcons}
        numColumns={2}
      />
    </Container>
  );
}
