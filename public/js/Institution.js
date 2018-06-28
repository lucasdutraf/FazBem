
let index = localStorage.getItem('@indexOfInstitutionsList')
let names = localStorage.getItem('@institution-names')
let addresses = localStorage.getItem('@institution-addresses')

tokensName = names.split(',')
tokensAddress = addresses.split(',')

document.getElementById("title-name").innerHTML = tokensName[index]
document.getElementById("address").innerHTML = tokensAddress[index]

//pegar os tokens do sobre, da lat e lng