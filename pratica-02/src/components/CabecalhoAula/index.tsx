import { View, Text } from "react-native"
import { styles } from "./style"

type props = {
  titulo: string
  subtitulo: string
}

export function CabecalhoAula({ titulo, subtitulo }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  )
}