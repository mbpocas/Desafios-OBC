const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const copy = document.getElementById("copyToClipboard")
input.focus()

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const calculate = () => {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  input.focus()
  resultInput.classList.remove('error')

  resultInput.value == 'undefined' ? resultInput.value = '' : null
}

// Pegando os valores dos botões da tela
document.querySelectorAll('.charKey').forEach ((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// Pegando o botão C - limpar os valores
document.getElementById('clear').addEventListener("click", () => {
  input.value = ''
  input.focus()    //focar o cursos para digitar no input
  resultInput.value = ''
  resultInput.classList.remove("success")
  copy.classList.remove("success")
  copy.innerText = "Copy"
  resultInput.classList.remove('error')
})


// Só ira aparecer no input as teclas validadas abaixo se estiverem no array allowedKeys
input.addEventListener('keydown', (ev) => {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
    // Slice para apagar os valores digitados, começando pelo útlimo que foi inserido
  }
  if (ev.key === 'Enter') {
     calculate()
  }
})

//chamando a função no EventListner
document.getElementById("equal").addEventListener("click", calculate)




// Add evento no botão Copy
copy.addEventListener("click", (ev) => {
   const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    resultInput.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
    resultInput.classList.remove("success")
  }
})

//Função para troca do Tema - Claro | Escuro
document.getElementById('themeSwitcher').addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#aa4400")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#ff944d")
    main.dataset.theme = "dark"
  }
})
