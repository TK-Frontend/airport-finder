import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import {
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import Screens from "./src/navigation";
import AppLoading from "expo-app-loading";

const App: FC = () => {
  let [fontsLoaded] = useFonts({
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Screens />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
