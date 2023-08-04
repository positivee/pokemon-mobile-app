import { PokemonAppTheme } from "@/styles/Theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/styles/globalStyles";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayoutNav() {
  return (
    <ThemeProvider value={PokemonAppTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={COLORS.primary} style="light" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
