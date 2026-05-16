import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { View, Pressable, Text } from "react-native";
import { RootTabParamList } from "@/navigation/AppTabs";
import { styles } from "@/styles";

type Props = BottomTabScreenProps<RootTabParamList, "Tarefas">;

export function TarefasScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas do dia</Text>
      <Text style={styles.subtitulo}>
        Local que apresentará a lista de tarefas do dia.
      </Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() => navigation.navigate("Resumo")}
      >
        <Text style={styles.botaoPrimarioTexto}>Ver resumo</Text>
      </Pressable>
    </View>
  );
}
