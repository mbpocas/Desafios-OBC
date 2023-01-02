alert("*** Vagas de Emprego *** ");


const displayMenu = () => {
  return parseInt(prompt(`Calculadora Geométrica\n
  1- Listar vagas disponíves
  2- Criar uma nova vaga
  3- Visualizar uma vaga
  4- Inscrever um candidato em uma vaga
  5- Excluir uma vaga
  6- Sair`))
}


const run = () => {
  let option = 0;
}

do {
  option = displayMenu()


  switch (option) {
    case 1:
      break
    case 2:
      break
    case 3:
      break
    case 4:
      break
    case 5:
      break
    case 6:
      alert("Saindo...")
      break
    default:
      alert("xxx Opção inválida xxx\n\nTente novamente.")
      break
  }



} while (option !== 6)


run()
