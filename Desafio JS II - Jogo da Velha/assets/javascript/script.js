// selecionar todas as regiões do tabuleiro Selector All
// criar um tabuleiro virtual para manipular os valores e verificações

// criar variavel let - jogador da vez

const boardRegions = document.querySelectorAll('#gameBoard span')
const start = document.getElementById('start')
const restart = document.getElementById('restart')
let vBoard = []
let turnPlayer = ''
let gameOver = false;

const updatePlayer = () => {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value
}

const initializeGame = () => {
  const player1 = document.getElementById('player1').value;
  const player2 = document.getElementById('player2').value;

  while (player1 === "" || player2 === "") {
    alert("Informe os dois jogadores!");
    return;
  }

  start.style.display = 'none'


  vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
  turnPlayer = 'player1'
  document.querySelector('h3').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
  updatePlayer()

  boardRegions.forEach((element) => {
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick)
  })
}

const restartGame = () => {
  alert ('Reiniciando...')
  location.reload(true)
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões
const getWinRegions = () => {
  const winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

// Desabilita uma região do tabuleiro para que não seja mais clicável
const disableRegion = (element) => {
  element.classList.remove('cursor-pointer')
  element.removeEventListener('click', handleBoardClick)
}

const handelWin = (regions) => {
  regions.forEach((region) => {
    document.querySelector('[data-region="'+ region +'"]').classList.add('win')
  })
  const playerWin = document.getElementById(turnPlayer).value
  document.querySelector('h3').innerHTML = playerWin + ' VENCEU!!! '
  gameOver = true;
}

const handleBoardClick = (ev) => {
  if(gameOver) return

  const span = ev.currentTarget
  const region = span.dataset.region // N.N
  const rowColumnPair = region.split('.') // ["N", "N"]
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
    vBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    vBoard[row][column] = 'O'
  }
  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear()
  console.table(vBoard)
  disableRegion(span)


  // Verifica se alguém venceu
  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handelWin(winRegions)
  } else if (vBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    updatePlayer()
  } else {
    document.querySelector('h3').innerHTML = 'Empate!'
  }
}

start.addEventListener('click', initializeGame)
restart.addEventListener('click', restartGame)
