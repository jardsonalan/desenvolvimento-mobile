import { View, Text } from "react-native";
import { styles } from "@/styles";

export function ResumoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo das tarefas</Text>
      <Text style={styles.subtitulo}>Resumo das tarefas do dia.</Text>
    </View>
  );
}
