import { useEffect, useState } from 'react';

import { useRoute, RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../../routes';

import { Header } from '../../components/Header';

import api from '../../services/api';

import { ListComponent } from '../../components/ListComponent';

import {
  List
} from './styles';

type ModelScreenRouteProp = RouteProp<RootStackParamList, 'Model'>;

type CarModel = {
  codigo: string;
  nome: string;
};

export function Model() {
  const [data, setData] = useState<CarModel[]>([]);

  const route = useRoute<ModelScreenRouteProp>();

  const { id } = route.params as { id: string };

  useEffect(() => {
    async function fetchCarModel() {
      try {
        const response = await api.get(`/carros/marcas/${id}/modelos`);
        setData(response.data.modelos || []);
      } catch (error) {
        console.error("Error fetching car model:", error);
      }
    }

    fetchCarModel();
  }, [id]);

  return (
    <List>
      <Header />

      <ListComponent
        data={data}
        showImages={false}
      />
    </List>
  );
}
