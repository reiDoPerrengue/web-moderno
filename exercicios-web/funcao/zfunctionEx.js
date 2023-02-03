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
//faça duas funções disparar o montante de juros simples e a outra de juros composto
console.log('  ')
console.log('Exercício 06)')

function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao){
    let jurosSimples = capitalInicial * taxaJuros/100 * tempoAplicacao
    return jurosSimples.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
} console.log(jurosSimples(2490,2.5,10))

function jurosComposto (capitalInicial, taxaJuros, tempoAplicacao){
    let jurosComposto = capitalInicial * (1 + taxaJuros) **tempoAplicacao
    let montanteComposto= jurosComposto - capitalInicial
    return montanteComposto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
} console.log(jurosComposto(1400,0.07,2))

console.log('____________')
//resolva a formula de baskara
console.log('  ')
console.log('Exercício 07)')

function baskara(ax2, bx, cx){

    let delta = bx * bx - 4 * ax2 * cx
    if (delta < 0 ){
        console.log('Delta é negativo')
    } else {
        let x1 = (-bx + delta) / (2 * ax2)
        let x2 = (-bx - delta) / (2 * ax2)
        console.log(x1, x2)
    }
        
    } baskara(3, -5, 12)

    console.log('____________')
//array que retorna quantas vezes um número é ultrapassado e qual posição está o menor número
console.log('  ')
console.log('Exercício 08)')

let tpontos = '10, 20, 20, 8, 25, 3, 0, 30, 1'

const avaliacao = (tpontos) => {
    let pontuacao = tpontos.split(', ')
    let quebraRecord = 0
    let piorJogo = 1
    let maiorPonto = pontuacao[0]
    let menorPonto = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao > maiorPonto) {
            maiorPonto = pontuacao[i]
            quebraRecord++;
        } else if (pontuacao < menorPonto) {
            menorPonto = pontuacao[i]
            piorJogo = i + 1;
        }
    }
    return [quebraRecord, piorJogo]
}

console.log('falta pesquisar array')


console.log('____________')
//sistema de notas de 0 a 100 com arrendondamento para cima após 38 pontos, menos com restos 1 e 2
console.log('  ')
console.log('Exercício 09)')

function notas (nota){
    var n = nota
    if (nota < 38) {
        console.log(`Aluno repovado com nota: ${nota}`)
    } else if(nota >= 38) {
        function round (n){
            if (n % 5 != 0){ //notas > 38 não divisivel por 5
                if (n % 5 == 1 || n % 5 == 2){ //restos 1 e 2 não se arredonda
                console.log(`Aluno aprovado com nota: ${nota}`)

                }else { // notas > 38 com restos != de 1 e 2 são arredondadas
                    let round = Math.ceil(n / 5)* 5
                    console.log(`Aluno aprovado com nota: ${round}`)
                    }
            } else { //notas > 38 divisivel por 5
                console.log(`Aluno aprovado com nota: ${nota}`)
            }
        }round(n)
    } 
} notas(48)

console.log('____________')
//function que verifica se a var é divisivel por 3 e returna booleano
console.log('  ')
console.log('Exercício 10)')

let divide3 = a => a % 3 ==0 
console.log(divide3(42))

console.log('____________')
//function que verifica se é ano bissexto e retorne no console true or false
console.log('  ')
console.log('Exercício 11)')

function anoBissexto(ano) {
    if (ano % 400 == 0) {
        console.log('True')
    } else if (ano % 100 == 0) {
        console.log('False')
    } else if (ano % 4 == 0) {
        console.log('True')
    } else {
        console.log('False')
    }
} anoBissexto(1988)

console.log('____________')
//algoritimo que calcule o fatorial de N
console.log('  ')
console.log('Exercício 12)')

function fator(num) {
    if (num === 0 || num === 1)
      return 1
    for (let i = num - 1; i >= 1; i--) {
      num *= i
    }
    return num
  }
  console.log(fator(5))

  console.log('____________')
//algoritimo que calcule s hoje é dia util
console.log('  ')
console.log('Exercício 13)')