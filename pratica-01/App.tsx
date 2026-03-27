import { BoasVindas } from '@/components/BoasVindas';
import { CardProximaAula } from '@/components/CardProximaAula';
import { CardPendencia } from '@/components/CardPendencia';
import { Rodape } from '@/components/Rodape';

import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <BoasVindas nameStudent='Jardson' course='Sistemas para Internet' />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Próximas aulas:</Text>
          <CardProximaAula classroom='Desenvolvimento Mobile' description='Quinta-feira e Sexta-feira' />
        </View>
        <View>
          <Text style={styles.title}>Pendências:</Text>
          <CardPendencia pending='Exercício de Revisão - Encontro 1' />
          <CardPendencia pending='Exercício de Estudo - Encontro 1' />
        </View>
      </View>
      <Rodape semester='5° Período' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: '#f4f4f4',
  },
  content: {
    flex: 1,
  },
  title: {
    paddingTop: 14,
    paddingLeft: 14,
    fontSize: 16,
    fontWeight: 700,
    color: '#1c1c1c'
  },
});
