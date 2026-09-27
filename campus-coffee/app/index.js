import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

const PRICE_PER_CUP = 150;

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Campus Coffee</Text>
        <Text style={styles.subtitle}>Build your order</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.count}>{coffeeCount}</Text>
        <Text style={styles.countLabel}>
          {coffeeCount === 1 ? "cup" : "cups"} of coffee
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
          <Text style={styles.stepGlyph}>–</Text>
        </Pressable>

        <View style={styles.stepDivider} />

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
        ₱{PRICE_PER_CUP} per cup · ₱{coffeeCount * PRICE_PER_CUP} total
      </Text>

      <View style={styles.spacer} />

      <Link
        href={{
          pathname: "/receipt",
          params: { coffeeCount: coffeeCount },
        }}
        asChild
      >
        <Pressable
          style={({ pressed }) => [
            styles.checkoutButton,
            pressed && styles.checkoutButtonPressed,
          ]}
        >
          <Text style={styles.checkoutText}>View receipt</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const COLORS = {
  bg: "#15100C",
  surface: "#1F1811",
  surfaceBorder: "#33291D",
  cream: "#F4EBDD",
  muted: "#A6957E",
  gold: "#E3B23C",
  goldPressed: "#C79A2F",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 28,
    paddingTop: 72,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 48,
  },
  brand: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.cream,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.muted,
    marginTop: 4,
  },
  hero: {
    alignItems: "center",
    marginBottom: 40,
  },
  count: {
    fontSize: 96,
    fontWeight: "800",
    color: COLORS.gold,
    lineHeight: 96,
    letterSpacing: -2,
  },
  countLabel: {
    fontSize: 17,
    color: COLORS.muted,
    marginTop: 4,
  },
  stepper: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    borderRadius: 20,
    overflow: "hidden",
  },
  stepButton: {
    width: 76,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  stepButtonPressed: {
    backgroundColor: COLORS.surfaceBorder,
  },
  stepDivider: {
    width: 1,
    height: "100%",
    backgroundColor: COLORS.surfaceBorder,
  },
  stepGlyph: {
    fontSize: 30,
    fontWeight: "600",
    color: COLORS.cream,
  },
  priceHint: {
    textAlign: "center",
    color: COLORS.muted,
    fontSize: 14,
    marginTop: 16,
  },
  spacer: {
    flex: 1,
  },
  checkoutButton: {
    backgroundColor: COLORS.gold,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  checkoutButtonPressed: {
    backgroundColor: COLORS.goldPressed,
  },
  checkoutText: {
    color: COLORS.bg,
    fontSize: 17,
    fontWeight: "700",
  },
});