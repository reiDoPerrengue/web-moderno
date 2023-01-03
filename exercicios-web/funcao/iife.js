// IIFE -> Immediately Invoked Function Expression
// fugir do escopo global, delimitada por parenteses, 
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()