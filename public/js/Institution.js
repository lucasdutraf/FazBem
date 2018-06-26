
let index = localStorage.getItem('@indexOfInstitutionsList')
console.log(index)

let names = localStorage.getItem('@institution-names')
console.log(names)

tokens = names.split(',')

console.log(tokens[index])

document.getElementById("title-name").innerHTML = tokens[index]