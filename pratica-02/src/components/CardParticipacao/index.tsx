import { View, Text } from "react-native";

import { styles } from "./style";

type props = {
  nome: string
  participacoes: number
}

export function CardParticipacao({ nome, participacoes }: props){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Participante:</Text>
      <View style={styles.boxParticipante}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.participacoes}>{participacoes}</Text>
      </View>
    </View>
  )
}