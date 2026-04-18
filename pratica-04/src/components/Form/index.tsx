import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { validar } from "@/services";
import { FormData, FormErrors } from "@/types";
import { styles } from "./style";

export function Form(){
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    tema: '',
    quantidadeVagas: ''
  })
  const [erros, setErros] = useState<FormErrors>({})

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }))
  }

  function enviar(){
    const errosEncontrados = validar(form)
    setErros(errosEncontrados)

    if (Object.keys(errosEncontrados).length > 0) {
      return
    }

    Alert.alert('Cadastro realizado', `Aluno: ${form.nome}`)

    setForm({ nome: '', email: '', tema: '', quantidadeVagas: '' })
    setErros({})
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        value={form.nome} 
        onChangeText={(nome) => atualizarCampo('nome', nome)} placeholder="Informe seu nome"
      />
      { erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null }
      <TextInput 
        style={styles.input} 
        value={form.email} 
        onChangeText={(email) => atualizarCampo('email', email)} placeholder="Informe seu e-mail" 
        keyboardType="email-address" 
        autoCapitalize="none"
      />
      { erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null }
      <TextInput 
        style={styles.input} 
        value={form.tema} 
        onChangeText={(tema) => atualizarCampo('tema', tema)} placeholder="Informe o tema"
      />
      { erros.tema ? <Text style={styles.textoErro}>{erros.tema}</Text> : null }
      <TextInput 
        style={styles.input} 
        value={form.quantidadeVagas} 
        onChangeText={(quantidadeVagas) => atualizarCampo('quantidadeVagas', quantidadeVagas)} 
        placeholder="Informe a quantidade de vagas" 
        keyboardType="number-pad"
      />
      { erros.quantidadeVagas ? <Text style={styles.textoErro}>{erros.quantidadeVagas}</Text> : null }
      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.textoBotao}>Enviar formulário</Text>
      </Pressable>
    </View>
  )
}