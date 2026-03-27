import { View, Text, TextProps } from "react-native";
import { styles } from "./style";

type Props = TextProps & {
  pending: string
}

export function CardPendencia({ pending, ...rest  }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.pending}>{pending}</Text>
    </View>
  )
}