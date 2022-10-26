//Parte A

const soma = (num1, num2) => {
    r=num1+num2
    return console.log(`Soma: ${num1} + ${num2} = ${r}`)
}

const sub = (num1, num2) => {
    r=num1-num2
    return console.log(`Subtração: ${num1} - ${num2} = ${r}`)
}

const mul = (num1, num2) => {
    r=num1*num2
    return console.log(`Multiplicação: ${num1} * ${num2} = ${r}`)
}

const div = (num1, num2) => {
    r=num1/num2
    return console.log(`Divisão: ${num1} / ${num2} = ${r}`)
}


const parm1 = prompt("Digite primeiro número:")
const parm2 = prompt("Digite o segundo número:")

soma(parm1,parm2)
sub(parm1,parm2)
mul(parm1,parm2)
div(parm1,parm2)