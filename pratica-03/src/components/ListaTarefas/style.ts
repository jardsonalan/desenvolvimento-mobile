import { StyleSheet } from "react-native";
import { colors, spacing } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
  },
  titulo: {
    fontSize: spacing.lg,
    fontWeight: 700,
    color: colors.primary
  }
})