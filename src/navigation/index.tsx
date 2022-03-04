import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AirportDetailsScreen, MapScreen, WelcomeScreen } from "../screens";
import { Airport } from "../models/airport.model";

export type MainStackParamList = {
  AirportDetailsScreen: {
    airport: Airport;
  };
  MapScreen: undefined;
  WelcomeScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Screens: FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen
          name="AirportDetailsScreen"
          component={AirportDetailsScreen}
        />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
        <MainStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
