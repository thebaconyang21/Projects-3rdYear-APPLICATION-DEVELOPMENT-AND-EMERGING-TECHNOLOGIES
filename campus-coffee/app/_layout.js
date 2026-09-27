import { Stack } from "expo-router";
 
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Order Coffee" }} />
      <Stack.Screen name="receipt" options={{ title: "Receipt" }} />
    </Stack>
  );
}