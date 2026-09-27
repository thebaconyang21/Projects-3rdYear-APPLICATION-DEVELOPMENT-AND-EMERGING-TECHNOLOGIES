import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Campus Coffee Order</Text>

      <Text style={styles.count}>Cups of Coffee: {coffeeCount}</Text>

      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, styles.removeButton]}
          onPress={() => {
            if (coffeeCount > 1) {
              setCoffeeCount(coffeeCount - 1);
            }
          }}
        >
          <Text style={styles.buttonText}>- Remove Cup</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.addButton]}
          onPress={() => {
            setCoffeeCount(coffeeCount + 1);
          }}
        >
          <Text style={styles.buttonText}>+ Add Cup</Text>
        </Pressable>
      </View>

      <Link
        href={{
          pathname: "/receipt",
          params: { coffeeCount: coffeeCount },
        }}
        asChild
      >
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>View Receipt</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF8F0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4B2E2B",
  },
  count: {
    fontSize: 20,
    marginBottom: 24,
    color: "#4B2E2B",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
  },
  removeButton: {
    backgroundColor: "#E57373",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: "#6F4E37",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});