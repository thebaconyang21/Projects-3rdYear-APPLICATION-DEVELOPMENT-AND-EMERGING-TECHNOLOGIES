import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRICE_PER_CUP = 150;

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();

  // coffeeCount arrives as a string via route params, so convert it to a number.
  const cups = Number(coffeeCount);
  const totalBill = cups * PRICE_PER_CUP;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Your Receipt</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Cups Ordered:</Text>
          <Text style={styles.value}>{cups}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Price per Cup:</Text>
          <Text style={styles.value}>₱{PRICE_PER_CUP}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total Bill:</Text>
          <Text style={styles.totalValue}>₱{totalBill}</Text>
        </View>
      </View>
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
    marginBottom: 24,
    color: "#4B2E2B",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B2E2B",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B2E2B",
  },
});