import { StyleSheet, Text, View } from 'react-native';

import { CabecalhoTurma } from '@/components/CabecalhoTurma';
import { ResumoAula } from '@/components/ResumoAula';
import { ListaTarefas } from '@/components/ListaTarefas';

import { colors, spacing } from '@/themes';

export default function App() {
  return (
    <View style={styles.container}>
      <CabecalhoTurma titulo='Desenvolvimento Mobile' subtitulo='Encontro 05' />
      <ResumoAula presentes={10} faltas={4} atividades={4} />
      <ListaTarefas>
        <View style={styles.boxTarefas}>
          <Text style={styles.tarefas}>Atividade 01</Text>
          <Text style={styles.entrega}>Entrega: 20/04/2026</Text>
        </View>
        <View style={styles.boxTarefas}>
          <Text style={styles.tarefas}>Atividade 02</Text>
          <Text style={styles.entrega}>Entrega: 21/04/2026</Text>
        </View>
        <View style={styles.boxTarefas}>
          <Text style={styles.tarefas}>Atividade 03</Text>
          <Text style={styles.entrega}>Entrega: 22/04/2026</Text>
        </View>
        <View style={styles.boxTarefas}>
          <Text style={styles.tarefas}>Atividade 04</Text>
          <Text style={styles.entrega}>Entrega: 23/04/2026</Text>
        </View>
      </ListaTarefas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  boxTarefas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 8,
  },
  tarefas: {
    fontSize: spacing.md,
    fontWeight: 500,
    color: colors.titleColor
  },
  entrega: {
    fontSize: spacing.md,
    fontWeight: 400,
    color: colors.subtitleColor,
  }
});
