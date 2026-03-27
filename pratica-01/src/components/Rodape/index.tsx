import { View, Text, TextProps } from "react-native";
import { styles } from "./style";

type Props = TextProps & {
  semester: string
}

export function Rodape({ semester, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Semestre: <Text style={styles.semester}>{semester}</Text>
      </Text>
    </View>
  )
}