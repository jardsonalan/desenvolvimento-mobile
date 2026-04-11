import React from "react";
import { View, Text } from "react-native";

import { styles } from "./style";

type Props = {
  children: React.ReactNode
}

export function ListaTarefas({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas:</Text>
      {children}
    </View>
  )
}