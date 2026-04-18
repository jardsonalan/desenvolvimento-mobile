import { StyleSheet, Text, View } from 'react-native';
import { Form } from '@/components/Form';
import { spacing } from '@/themes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Participação em Oficina</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  titulo: {
    color: '#071e4e',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: spacing.lg
  }
});
