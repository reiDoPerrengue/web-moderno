//1 - crie função dado dois valores retone some, divisão, multiplicaçaõ e subtração
console.log('  ')
console.log('Exercício 01)')

const calculadora = function(x,y){
    return x + y
}
const imprimir = function(a, b, operacao=calculadora){
    console.log(operacao(a,b))
}
imprimir(3, 4)
imprimir(3, 4, (x, y)=> x * y)
imprimir(3, 4, (x, y)=> x / y)
imprimir(3, 4, (x, y)=> x - y)

console.log('____________')
//2 - crie funcao que receba 3 valores e retorne qual o tipo de triangulo foi formado
console.log('  ')
console.log('Exercício 02)')

function triangulo(a, b, c) {
 {
    if(a==b && b==c){
        console.log('Triangulo equilátero')

    } else if (a!=b && b==c || a==b && b!=c) {
        console.log('Triangulo isóceles')
    } else {
        console.log('Triangulo escaleno')
    }
    }
}

triangulo(3, 3, 3)
console.log('____________')
//03- Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
console.log('  ')
console.log('Exercício 03)')

function baseExpoente (x, y){
    return x ** y
} console.log(baseExpoente(2,6))
console.log('____________')

//04 - Função que recebe dois valores e retona resultado de sua divisão + o seu resto
console.log('  ')
console.log('Exercício 04)')
console.log('  ')
const divisao = function (x, y) {
    return x / y
}

const imprimirResultado = function (a, b, operacao = divisao) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 2)
imprimirResultado(10, 2, (x, y) => x % y)

console.log('____________')
//05 - transforme qualquer numero recebido convertido em R$ 00,00
console.log('  ')
console.log('Exercício 05)')

function ganhoPorHora(salario, horasTrabalhadas){
    let salarioHora = (salario / horasTrabalhadas)
    let formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
    return formatado;
} console.log(ganhoPorHora(53,176))
console.log('____________')