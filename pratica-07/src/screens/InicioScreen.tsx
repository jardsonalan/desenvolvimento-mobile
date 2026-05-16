import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerActions } from "@react-navigation/native";
import { View, Pressable, Text } from "react-native";
import { RootTabParamList } from "@/navigation/AppTabs";
import { styles } from "@/styles";

type Props = BottomTabScreenProps<RootTabParamList, "Inicio">;

export function InicioScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel Inicial</Text>
      <Text style={styles.subtitulo}>Bem-vindo ao seu painel inicial!</Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() => navigation.navigate("Tarefas")}
      >
        <Text style={styles.botaoPrimarioTexto}>Ir para Tarefas</Text>
      </Pressable>

      <Pressable
        style={styles.botaoSecundario}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text style={styles.botaoSecundarioTexto}>Abrir menu lateral</Text>
      </Pressable>
    </View>
  );
}
