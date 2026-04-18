import { StyleSheet } from "react-native";
import { spacing } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
  },
  input: {
    padding: spacing.lg,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e4e4e4',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: spacing.sm
  },
  botao: {
    padding: spacing.lg,
    backgroundColor: '#071e4e',
    borderRadius: 8
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  },
  textoErro: {
    color: '#ac0f0f',
    fontSize: 12,
    marginBottom: spacing.md
  }
})