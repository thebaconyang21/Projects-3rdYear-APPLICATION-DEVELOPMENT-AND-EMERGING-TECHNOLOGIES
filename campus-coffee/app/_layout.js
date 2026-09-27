import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#eeebe4" },
        headerTintColor: "#3E2C1E",
        headerTitleStyle: { fontFamily: "serif", fontWeight: "700" },
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Order Pad" }} />
      <Stack.Screen name="receipt" options={{ title: "Receipt" }} />
    </Stack>
  );
}