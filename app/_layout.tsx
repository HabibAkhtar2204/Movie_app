import { Stack } from "expo-router";
import "./globals.css";
import { HeaderShownContext } from "expo-router/build/react-navigation";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
