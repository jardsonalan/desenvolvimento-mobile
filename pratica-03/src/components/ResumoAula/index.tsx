import { View, Text } from "react-native";

import { styles } from "./style";

type Props = {
  presentes: number
  faltas: number
  atividades: number
}

export function ResumoAula({ presentes, faltas, atividades }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.boxIndicadores}>
        <Text style={styles.titulo}>Presentes:</Text>
        <Text style={styles.indicadores}>{presentes}</Text>
      </View>
      <View style={styles.boxIndicadores}>
        <Text style={styles.titulo}>Faltas:</Text>
        <Text style={styles.indicadores}>{faltas}</Text>
      </View>
      <View style={styles.boxIndicadores}>
        <Text style={styles.titulo}>Atividades:</Text>
        <Text style={styles.indicadores}>{atividades}</Text>
      </View>
    </View>
  )
}