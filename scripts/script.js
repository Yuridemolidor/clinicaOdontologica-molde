const form = document.getElementById("form")

form.addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let telefone = document.getElementById("telefone").value
let servico = document.getElementById("servico").value
let data = document.getElementById("data").value
let hora = document.getElementById("hora").value

let numero = "5516981359971"

let mensagem = `Olá, gostaria de agendar uma consulta.

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Data: ${data}
Horário: ${hora}`

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

})

const horas = document.querySelectorAll(".hora")
const inputHora = document.getElementById("hora")

horas.forEach(botao => {

botao.addEventListener("click",()=>{

horas.forEach(b=>b.classList.remove("selecionado"))

botao.classList.add("selecionado")

inputHora.value = botao.innerText

})

})

const calendar = document.getElementById("calendar")
const mesAno = document.getElementById("mesAno")

let dataAtual = new Date()

function renderCalendar(){

calendar.innerHTML=""

let ano = dataAtual.getFullYear()
let mes = dataAtual.getMonth()

mesAno.innerText = dataAtual.toLocaleDateString("pt-BR",{month:"long",year:"numeric"})

let diasMes = new Date(ano, mes+1, 0).getDate()

for(let i=1;i<=diasMes;i++){

let dia = document.createElement("div")

dia.classList.add("day")

dia.innerText = i

dia.onclick = function(){

document.querySelectorAll(".day").forEach(d=>d.classList.remove("selected"))

dia.classList.add("selected")

let mesFormatado = String(mes+1).padStart(2,"0")
let diaFormatado = String(i).padStart(2,"0")

document.getElementById("data").value = `${ano}-${mesFormatado}-${diaFormatado}`

}

calendar.appendChild(dia)

}

}

renderCalendar()

document.getElementById("prevMes").onclick=()=>{
dataAtual.setMonth(dataAtual.getMonth()-1)
renderCalendar()
}

document.getElementById("nextMes").onclick=()=>{
dataAtual.setMonth(dataAtual.getMonth()+1)
renderCalendar()
}