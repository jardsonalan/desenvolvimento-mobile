import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigation/AppStack"
import { Pressable, Text, View } from "react-native"
import { styles } from "@/style"

type Props = NativeStackScreenProps<RootStackParamList, 'Conclusao'>

export function ConclusaoScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro concluído com sucesso!</Text>
      <Pressable style={styles.botaoPrimario} onPress={() => navigation.popToTop()}>
        <Text style={styles.botaoPrimarioTexto}>Voltar para início</Text>
      </Pressable>
    </View>
  )
}