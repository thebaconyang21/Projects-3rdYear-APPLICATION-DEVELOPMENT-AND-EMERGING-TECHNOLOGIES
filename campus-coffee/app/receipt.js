import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PixelFrog from "../components/PixelFrog";

const PRICE_PER_CUP = 150;

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();

  const cups = Number(coffeeCount);
  const totalBill = cups * PRICE_PER_CUP;

  return (
    <View style={styles.page}>
      <View style={styles.frogWrap}>
        <PixelFrog />
      </View>
      <View style={styles.slip}>
        <Text style={styles.perforation}>• • • • • • • • • • • • • • •</Text>

        <Text style={styles.slipTitle}>CAMPUS COFFEE</Text>
        <Text style={styles.slipAddress}>ORDER RECEIPT</Text>

        <View style={styles.doubleRule} />

        <View style={styles.line}>
          <Text style={styles.lineText}>ITEM</Text>
          <Text style={styles.lineText}>COFFEE</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.lineText}>QTY</Text>
          <Text style={styles.lineText}>{cups}</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.lineText}>UNIT PRICE</Text>
          <Text style={styles.lineText}>{PRICE_PER_CUP}.00</Text>
        </View>

        <View style={styles.doubleRule} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>₱{totalBill}.00</Text>
        </View>

        <View style={styles.doubleRule} />

        <Text style={styles.thanks}>*** THANK YOU ***</Text>
        <Text style={styles.thanksSmall}>please come again</Text>

        <Text style={styles.perforation}>• • • • • • • • • • • • • • •</Text>
      </View>
    </View>
  );
}

const COLORS = {
  bg: "#ffffff",
  paper: "#F1E4C3",
  ink: "#3E2C1E",
  inkFaded: "#7A6647",
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  frogWrap: {
    marginBottom: -6,
  },
  slip: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: COLORS.paper,
    paddingVertical: 20,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: COLORS.inkFaded,
  },
  perforation: {
    fontFamily: "monospace",
    fontSize: 12,
    color: COLORS.inkFaded,
    textAlign: "center",
    letterSpacing: 1,
  },
  slipTitle: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.ink,
    textAlign: "center",
    marginTop: 14,
    letterSpacing: 1,
  },
  slipAddress: {
    fontFamily: "monospace",
    fontSize: 12,
    color: COLORS.inkFaded,
    textAlign: "center",
    marginTop: 2,
  },
  doubleRule: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.inkFaded,
    marginVertical: 14,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  lineText: {
    fontFamily: "monospace",
    fontSize: 13,
    color: COLORS.ink,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontFamily: "monospace",
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.ink,
    letterSpacing: 1,
  },
  totalValue: {
    fontFamily: "monospace",
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.ink,
  },
  thanks: {
    fontFamily: "monospace",
    fontSize: 13,
    color: COLORS.ink,
    textAlign: "center",
    marginTop: 4,
  },
  thanksSmall: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.inkFaded,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 14,
  },
});