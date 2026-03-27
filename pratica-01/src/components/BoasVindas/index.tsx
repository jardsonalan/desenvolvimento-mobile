import { View, Text, TextProps } from "react-native";
import { styles } from "./style";

type Props = TextProps & {
  nameStudent: string
  course: string
}

export function BoasVindas({ nameStudent, course, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Olá <Text style={styles.nameStudent}>{nameStudent}</Text>, seja bem-vindo!
      </Text>
      <Text style={styles.subtitle}>{course}</Text>
    </View>
  )
}