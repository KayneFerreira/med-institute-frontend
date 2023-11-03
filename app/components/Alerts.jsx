import swal from "sweetalert"


export const insertSuccess = () => {
  swal({
    title: "Sucesso!",
    text: "O registro foi efetuado com sucesso!",
    icon: "success",
    button: "OK"
  })
}


export const insertFailed = (error) => {
  swal({
    title: "Ocorreu um erro!",
    text: "Falha ao tentar efetuar o registro. ERRO: " + error,
    icon: "error",
    button: "OK"
  })
}