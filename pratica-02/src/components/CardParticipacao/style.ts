import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: '#fbf7f8',
    borderRadius: spacing.sm,
    gap: spacing.xs
  },
  titulo: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1a4979'
  },
  boxParticipante: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nome: {
    fontSize: 14,
    fontWeight: 500,
  },
  participacoes: {
    fontSize: 14,
    fontWeight: 500
  }
})