import { useEffect } from 'react';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';

import { MyProvider } from './src/context/UserContext';

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'poppins': Poppins_400Regular,
    'poppins-bold': Poppins_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <MyProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </MyProvider>
  );
}
