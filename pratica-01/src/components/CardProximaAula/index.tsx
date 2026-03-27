import { View, Text, TextProps } from "react-native";
import { styles } from "./style";

type Props = TextProps & {
  classroom: string
  description: string
}

export function CardProximaAula({ classroom, description, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{classroom}</Text>
      <Text style={styles.subtitle}>
        Descrição: <Text style={styles.description}>{description}</Text>
      </Text>
    </View>
  )
}