import React, { useEffect } from "react";

import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import { Home } from "../screens/Home";

import { SignIn } from "../screens/SignIn";

import { Model } from "../screens/Model";

import { useMyContext } from "../context/UserContext";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Model: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const { logged } = useMyContext();
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (logged) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [logged, navigation]);

  return (
    <Stack.Navigator initialRouteName={logged ? "Home" : "Login"}>
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Model"
        component={Model}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
