import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRICE_PER_CUP = 150;

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();

  // coffeeCount arrives as a string via route params, so convert it to a number.
  const cups = Number(coffeeCount);
  const totalBill = cups * PRICE_PER_CUP;

  return (
    <View style={styles.page}>
      <View style={styles.slip}>
        <Text style={styles.slipTitle}>Campus Coffee</Text>
        <Text style={styles.slipSubtitle}>Order receipt</Text>

        <View style={styles.dashedRule} />

        <View style={styles.line}>
          <Text style={styles.lineLabel}>Item</Text>
          <View style={styles.leader} />
          <Text style={styles.lineValue}>Coffee</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.lineLabel}>Cups ordered</Text>
          <View style={styles.leader} />
          <Text style={styles.lineValue}>{cups}</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.lineLabel}>Price per cup</Text>
          <View style={styles.leader} />
          <Text style={styles.lineValue}>₱{PRICE_PER_CUP}</Text>
        </View>

        <View style={styles.dashedRule} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total bill</Text>
          <Text style={styles.totalValue}>₱{totalBill}</Text>
        </View>

        <View style={styles.dashedRule} />

        <Text style={styles.thanks}>Thank you for your order</Text>
      </View>
    </View>
  );
}

const COLORS = {
  bg: "#15100C",
  paper: "#F4EBDD",
  paperMuted: "#8A7A63",
  ink: "#1F1811",
  gold: "#B8860B",
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  slip: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: COLORS.paper,
    borderRadius: 12,
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  slipTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.ink,
    textAlign: "center",
    letterSpacing: -0.3,
  },
  slipSubtitle: {
    fontSize: 13,
    color: COLORS.paperMuted,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 4,
  },
  dashedRule: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.paperMuted,
    marginVertical: 16,
  },
  line: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  lineLabel: {
    fontSize: 14,
    color: COLORS.ink,
  },
  lineValue: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.ink,
    fontVariant: ["tabular-nums"],
  },
  leader: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: "dotted",
    borderColor: COLORS.paperMuted,
    marginHorizontal: 6,
    marginBottom: 3,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.ink,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.gold,
    fontVariant: ["tabular-nums"],
  },
  thanks: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.paperMuted,
  },
});