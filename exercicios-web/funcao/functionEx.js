//1 - crie função dado dois valores retone some, divisão, multiplicaçaõ e subtração

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


//2 - crie funcao que receba 3 valores e retorne qual o tipo de triangulo formado