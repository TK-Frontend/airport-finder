import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AirportDetailsScreen, MapScreen, WelcomeScreen } from "../screens";
import { Airport } from "../models/airport.model";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AirportDetailsScreen: Airport;
  MapScreen: undefined;
  WelcomeScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Screens: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="AirportDetailsScreen"
          component={AirportDetailsScreen}
        />
        <RootStack.Screen name="MapScreen" component={MapScreen} />
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  "AirportDetailsScreen"
>;
export default Screens;
