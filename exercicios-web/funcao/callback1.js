const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach = retorna cada um dos evento da array (em loop) 
fabricantes.forEach(fabricante => console.log(fabricante))