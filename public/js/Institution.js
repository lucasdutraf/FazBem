
let index = localStorage.getItem('@indexOfInstitutionsList')
let names = localStorage.getItem('@institution-names')
let addresses = localStorage.getItem('@institution-addresses')
let about = localStorage.getItem('@institution-about')
let cep = localStorage.getItem("@institution-names")

tokensName = names.split(',')
tokensAddress = addresses.split(',')
tokensAbout = about.split(',')

document.getElementById("title-name").innerHTML = tokensName[index]
document.getElementById("address").innerHTML = tokensAddress[index]
document.getElementById("about-inst").innerHTML = tokensAbout[index]
//pegar os tokens do sobre, da lat e lng