import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { BadgePlus, Trash } from 'lucide-react-native';

import { CabecalhoAula } from '@/components/CabecalhoAula';
import { CardParticipacao } from '@/components/CardParticipacao';

import { spacing } from '@/theme/spacing';

export default function App() {
  const [participacoes, setParticipacoes] = useState(0)
  let status: string

  if (participacoes === 0) {
    status = 'Vamos começar?'
  } else if (participacoes <= 3) {
    status = 'Boa participação!'
  } else {
    status = 'Excelente ritmo hoje!'
  }

  return (
    <View style={styles.container}>
      <CabecalhoAula titulo='Desenvolvimento Mobile' subtitulo='Encontro 04'/>
      <CardParticipacao nome='Jardson' participacoes={participacoes} />

      <View style={styles.boxStatus}>
        <Text style={styles.titleStatus}>Status:</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={() => setParticipacoes(participacoes + 1)}>
          <BadgePlus size={18} color={'#fbfbfb'} />
          <Text style={styles.textButton}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={() => setParticipacoes(0)}>
          <Trash size={18} color={'#fbfbfb'}/>
          <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: spacing.lg,
    paddingTop: 56,
    gap: spacing.lg
  },
  boxStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fbf7f8',
    padding: spacing.lg,
    borderRadius: spacing.sm
  },
  titleStatus: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1a4979'
  },
  status: {
    fontSize: 14,
    fontWeight: 500,
  },
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: spacing.sm,
    backgroundColor: '#1a4979',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fbfbfb',
    fontSize: 14,
    fontWeight: 700,
  }
});
