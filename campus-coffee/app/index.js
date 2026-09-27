import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

const PRICE_PER_CUP = 150;

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <Text style={styles.brand}>Campus Coffee Co.</Text>
        <Text style={styles.est}>~ est. order pad ~</Text>

        <View style={styles.rule} />

        <View style={styles.hero}>
          <Text style={styles.count}>{coffeeCount}</Text>
          <Text style={styles.countLabel}>
            {coffeeCount === 1 ? "CUP OF COFFEE" : "CUPS OF COFFEE"}
          </Text>
        </View>

        <View style={styles.stepper}>
          <Pressable
            style={({ pressed }) => [
              styles.stepButton,
              pressed && styles.stepButtonPressed,
            ]}
            onPress={() => {
              if (coffeeCount > 1) {
                setCoffeeCount(coffeeCount - 1);
              }
            }}
          >
            <Text style={styles.stepGlyph}>−</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.stepButton,
              pressed && styles.stepButtonPressed,
            ]}
            onPress={() => {
              setCoffeeCount(coffeeCount + 1);
            }}
          >
            <Text style={styles.stepGlyph}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.priceHint}>
          {PRICE_PER_CUP} PESOS PER CUP · {coffeeCount * PRICE_PER_CUP} TOTAL
        </Text>

        <View style={styles.rule} />

        <Link
          href={{
            pathname: "/receipt",
            params: { coffeeCount: coffeeCount },
          }}
          asChild
        >
          <Pressable
            style={({ pressed }) => [
              styles.stamp,
              pressed && styles.stampPressed,
            ]}
          >
            <Text style={styles.stampText}>View Receipt</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const COLORS = {
  bg: "#D9C9A3",
  paper: "#F1E4C3",
  paperShadow: "#C9B481",
  ink: "#3E2C1E",
  inkFaded: "#7A6647",
  oxblood: "#7A2E2E",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  ticket: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: COLORS.paper,
    borderWidth: 2,
    borderColor: COLORS.ink,
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  brand: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.ink,
    textAlign: "center",
  },
  est: {
    fontFamily: "serif",
    fontSize: 13,
    fontStyle: "italic",
    color: COLORS.inkFaded,
    textAlign: "center",
    marginTop: 2,
  },
  rule: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.inkFaded,
    marginVertical: 18,
  },
  hero: {
    alignItems: "center",
    marginBottom: 22,
  },
  count: {
    fontFamily: "serif",
    fontSize: 84,
    fontWeight: "700",
    color: COLORS.ink,
    lineHeight: 88,
  },
  countLabel: {
    fontFamily: "monospace",
    fontSize: 13,
    letterSpacing: 2,
    color: COLORS.inkFaded,
    marginTop: 6,
  },
  stepper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 18,
  },
  stepButton: {
    width: 64,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.paper,
    borderWidth: 2,
    borderColor: COLORS.ink,
  },
  stepButtonPressed: {
    backgroundColor: COLORS.paperShadow,
  },
  stepGlyph: {
    fontFamily: "serif",
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.ink,
  },
  priceHint: {
    fontFamily: "monospace",
    fontSize: 12,
    letterSpacing: 1,
    color: COLORS.inkFaded,
    textAlign: "center",
  },
  stamp: {
    borderWidth: 3,
    borderColor: COLORS.oxblood,
    paddingVertical: 14,
    alignItems: "center",
    transform: [{ rotate: "-1deg" }],
  },
  stampPressed: {
    backgroundColor: "#E9D6B5",
  },
  stampText: {
    fontFamily: "serif",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 3,
    color: COLORS.oxblood,
    textTransform: "uppercase",
    textAlign: "center",
  },
});