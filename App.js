import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import {NavigationContainer,  DefaultTheme, DarkTheme,} from "@react-navigation/native";
import StackNavigation from "./src/Navigation/StackNavigation";
import i18n from "./src/services/i18n/index.js";
import {useColorScheme} from "react-native";
// Define the config


// extend the theme
export const theme = extendTheme({
    config:{
        useSystemColorMode: true,
        initialColorMode: "dark",
    }
});

export default function App() {
  const scheme = useColorScheme();

  return (
    <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
              <StackNavigation />
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component