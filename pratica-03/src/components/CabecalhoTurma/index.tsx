import { View, Text } from "react-native";

import { styles } from "./style";

type Props = {
  titulo: string
  subtitulo: string
}

export function CabecalhoTurma({ titulo, subtitulo }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  )
}