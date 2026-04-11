import { StyleSheet } from "react-native";

import { spacing } from "@/theme/spacing";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a4979',
    padding: spacing.lg,
    borderRadius: spacing.sm,
    gap: spacing.xs
  },
  titulo: {
    fontSize: 16,
    fontWeight: 700,
    color: '#fbfbfb'
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: 400,
    color: '#c7e3ff'
  }
})