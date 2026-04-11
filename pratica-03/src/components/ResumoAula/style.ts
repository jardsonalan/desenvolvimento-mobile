import { StyleSheet } from "react-native";
import { colors, spacing } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: spacing.md,
    backgroundColor: '#fbfbfb',
    borderRadius: 8
  },
  boxIndicadores: {
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md
  },
  titulo: {
    fontSize: spacing.lg,
    fontWeight: 500,
  },
  indicadores: {
    fontSize: spacing.xl,
    fontWeight: 700,
    color: colors.primary
  }
})