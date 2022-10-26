
//Parte A
const soma = (num1, num2) => {
    r = num1 + num2
    console.log(`Num 1 = ${num1} Num 2 = ${num2}`)
    console.log(`O resultado da soma é ${r}`)
}
soma(589,7845)

//Parte B
const numMaior = (num1, num2) => {
    r = num1 > num2 || num1 == num2
    console.log(`Num 1 = ${num1} Num 2 = ${num2}`)
    return console.log(`O primeiro número é maior ou igual ao segundo: ${r}`)
}
numMaior(10,5)

//Parte C
const numPar = (num1) => {
    par = num1 % 2 == 0
    console.log(`O número ${num1} é par: ${par}`)
}
numPar(3)
numPar(8)

//Parte D
const salario = (num) => {
    r = num - (num * 0.1)
    return console.log(`Salário com desconto ${r}`)
}
salario(6000)

