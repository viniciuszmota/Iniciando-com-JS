
// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 1
let numberTwo = 2

let sum = numberOne + numberTwo
alert(sum)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let variable = prompt("Digite qualquer coisa: ")

let numberVariable = Number(variable)

if (!isNaN(numberVariable)) {
    alert("É um número!")
} else {
    alert("Não é um número!")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let svariable = prompt("Digite qualquer coisa: ")

let sNumberVariable = Number(svariable)

if (!isNaN(numberVariable)) {
    alert("Não é uma string!")
} else {
    alert("É uma string!")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


let value = true; 

if (typeof value === 'boolean') {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberSubOne = 1
let numberSubTwo = 2

let sub = numberSubOne - numberSubTwo
alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberMultiOne = 1
let numberMultiTwo = 2

let multi = numberMultiOne * numberMultiTwo
alert(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberDivOne = 1
let numberDivTwo = 2

let div = numberDivOne / numberDivTwo
alert(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let evenNumber = prompt("Digite um número: ")

let evenNumberCheck = evenNumber % 2

if (evenNumberCheck === 0) {
    alert("É um número par!")
} else {
    alert("Não é um número par!")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let oddNumber = prompt("Digite um número: ")

let oddNumberCheck = evenNumber % 2

if (evenNumberCheck === 0) {
    alert("Não é um número ímpar!")
} else {
    alert("É um número ímpar!")
}