import { FormData, FormErrors } from "@/types"

export function validar(dados: FormData) {
  const erros: FormErrors = {}

  if (!dados.nome.trim()) {
    erros.nome = 'Nome é obrigatório'
  } else if (dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter pelo menos 3 caracteres'
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'Por favor, informe um e-mail válido'
  }

  if (!dados.tema.trim()) {
    erros.tema = 'Informe um tema'
  }

  if (Number(dados.quantidadeVagas.trim()) < 1) {
    erros.quantidadeVagas = 'Informe a quantidade de vagas'
  }

  return erros
}