import { useState } from "react"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigation/AppStack"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "@/style"

type Props = NativeStackScreenProps<RootStackParamList, 'Atendimento'>

type FormData = {
  nome: string
  telefone: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function apenasDigitos(valor: string) {
  return valor.replace(/\D/g, '');
}

function formatarTelefone(valor: string) {
  const digitos = apenasDigitos(valor).slice(0, 11);
  if (!digitos) return '';
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {}

  if (!dados.nome.trim() || dados.nome.length < 3) {
    erros.nome = 'O nome é obrigatório e deve ter pelo menos 3 caracteres'
  }

  if (!dados.telefone.trim() || dados.telefone.length < 10 || dados.telefone.length > 11) {
    erros.telefone = 'O telefone é obrigatório e deve ter pelo menos 10 ou 11 digitos'
  }

  return erros
}

export function AtendimentoScreen({ navigation }: Props) {
  const [form, setForm] = useState<FormData>({ nome: '', telefone: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm(prev => ({ ...prev, [campo]: valor }))
  }

  function enviar() {
    const erros = validar(form)
    setErrors(erros)
    
    if (Object.keys(erros).length > 0) return

    setForm({ nome: '', telefone: '' })
    setErrors({})

    navigation.replace('Conclusao')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Atendimento</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="ex: João Mario"
        value={form.nome}
        onChangeText={(valor) => atualizarCampo('nome', valor)}
        style={styles.input}
      />
      {errors.nome ? <Text style={styles.textoErro}>{errors.nome}</Text> : null}
  
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
        maxLength={15}
        value={formatarTelefone(form.telefone)}
        onChangeText={(valor) => atualizarCampo('telefone', apenasDigitos(valor))}
        style={styles.input}
      />
      {errors.telefone ? <Text style={styles.textoErro}>{errors.telefone}</Text> : null}

      <Pressable style={styles.botaoPrimario} onPress={enviar}>
        <Text style={styles.botaoPrimarioTexto}>Finalizar cadastro</Text>
      </Pressable>
      <Pressable style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoSecundarioTexto}>Voltar</Text>
      </Pressable>
    </View>
  )
}