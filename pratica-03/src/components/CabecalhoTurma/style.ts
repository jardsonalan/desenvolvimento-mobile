import { StyleSheet } from "react-native";

import { colors, spacing } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    gap: spacing.xs
  },
  titulo: {
    fontSize: spacing.lg,
    fontWeight: 700,
    color: colors.titleColor
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.subtitleColor
  }
})