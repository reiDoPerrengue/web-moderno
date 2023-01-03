function produto (Marca, Preco){
    return{
        Marca,
        Preco,
        Validade: '01/10/2020'
    }
}
console.log(produto('Leite integral', 4.15))
console.log(produto('Salsicha sadia', 10,70))