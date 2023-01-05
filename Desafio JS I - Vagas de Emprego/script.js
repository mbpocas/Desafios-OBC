alert("*** Vagas de Emprego *** ");

const vagas = [];

const listJob = () => {
  if (vagas.length == 0) {
    return alert(`X Sem vagas disponíveis no momento. X`)
  } else {
  let textoVaga = ""
  vagas.forEach((n, i) => {
    textoVaga += `Vaga: (${i+1}) - ${n.nome} => Candidato(s): (${n.candidatos.length})\n`
  })
    return alert (`Vagas disponíveis:${vagas.length}\n
${textoVaga}`)
  }
}

function createJob() {
  let newJob = {};
  newJob.nome = prompt(`Informe o nome da vaga:`);
  newJob.descricao = prompt(`Informe a descrição da vaga:`);
  newJob.dataLimite = prompt(`Qual a data limite para inscrição: `);
  newJob.candidatos = [];

  let save = confirm(`Deseja salvar esta vaga? \n
  Nome da Vaga: ${newJob.nome}
  Descrição: ${newJob.descricao}
  Data Limite: ${newJob.dataLimite}
  `);

  if (save) {
    vagas.push(newJob);
    alert(`Vaga salva com sucesso na base dados!`);
  } else {
    alert(`X Vaga não foi salva na base de dados X`);
  }
}

const viewJob = () => {
  if (vagas.length == 0) {
    alert(`X Sem vagas disponíveis no momento. X`)
  } else {
  let textoCandidato  = ""
  let indice = parseInt(prompt("Informe o índice da vaga que deseja exibir:"))
  let vaga = vagas[indice - 1]

    if (vaga != undefined) {
      vaga.candidatos.map( candidato => {textoCandidato += `- ${candidato}\n`} )
      alert
          (`
    Índice: ${indice}
    Vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}
    Quantidade de Candidatos: ${vaga.candidatos.length}
    Candidatos inscritos:\n${textoCandidato}`)
    } else {
      alert('Indice inválido')
    }
  }
}

const addUserJob = () => {
  if (vagas.length == 0) {
    alert(`X Sem vagas disponíveis no momento. X`)
  } else {
  let indice = parseInt(prompt("Informe o índice da vaga que deseja inscrever o candidato:"))
  let vaga = vagas[indice - 1]

    if (vaga != undefined) {
      let username = prompt("Informe o nome do candidato para inscrição na vaga:")
      let save = confirm(`Deseja inscrever o candidato "${username}" nesta vaga? \n
    Nome da Vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}
    `)
      if (save){
        vaga.candidatos.push(username)
        alert(`Inscrição realizada com sucesso!`)
      } else {
        alert(`X Candidato não foi inscrito na vaga selecionada X`)
      }
    } else {
      alert('Indice inválido')
    }
  }
}

const deleteJob = () => {
  if (vagas.length == 0) {
    alert(`X Sem vagas disponíveis no momento. X`)
  } else {
  let indice = parseInt(prompt("Informe o índice da vaga que deseja excluir:"))
  let vaga = vagas[indice - 1]

    if (vaga != undefined) {
      let deleteJob = confirm(`Deseja realmente excluir a vaga "${vaga.nome}"? \n
    Nome da Vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}
    Quantidade de Candidatos: ${vaga.candidatos.length}
    `)
      if (deleteJob){
        vagas.splice(indice -1 , 1)
        console.log(vagas)
        alert(`Vaga excluída com sucesso!`)
      } else {
        alert(`X Vaga não foi excluída da base de dados. X`)
      }
    } else {
      alert('Indice inválido')
    }
  }
}

const displayMenu = () => {
  return parseInt(prompt(`Vagas de Emprego\n
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
      listJob()
      break
    case 2:
      createJob()
      break
    case 3:
      viewJob()
      break
    case 4:
      addUserJob()
      break
    case 5:
      deleteJob()
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
