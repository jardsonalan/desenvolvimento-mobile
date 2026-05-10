import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigation/AppStack"
import { Pressable, Text, View } from "react-native"
import { styles } from "@/style"

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>

export function InicioScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fluxo de Atendimento</Text>
      <Text style={styles.subtitulo}>Use as opções para navegar entre as telas</Text>

      <Pressable style={styles.botaoPrimario} onPress={() => navigation.navigate('Atendimento')}>
        <Text style={styles.botaoPrimarioTexto}>Ir para cadastro de atendimento</Text>
      </Pressable>
    </View>
  )
}