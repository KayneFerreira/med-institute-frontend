import Swal from "sweetalert2"


export const insertSuccess = () => {
  Swal.fire({
    title: "Sucesso!",
    text: "O registro foi efetuado com sucesso!",
    icon: "success",
  })
}


export const insertFailed = (status) => {
  Swal.fire({
    title: "Ocorreu um erro!",
    text: "Falha ao tentar efetuar o registro. ERRO: " + status,
    icon: "error",
  })
}


export const deletePrompt = () => {
  Swal.fire({
    title: "Sucesso!",
    text: "O paciente foi removido com sucesso!",
    icon: "success",
  })
}


export const deleteFailed = (status) => {
  Swal.fire({
    title: "Ocorreu um erro!",
    text: "Falha ao tentar remover o registro. ERRO: " + status,
    icon: "error",
    button: "OK"
  })
}


