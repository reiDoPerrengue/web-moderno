const valor = 'Global'

function minhaFuncao() {//funcao carrega consigo todo o contexto que foi escrita, estudo base para closure
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()