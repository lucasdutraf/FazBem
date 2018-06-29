// pegar o ID, agencia e numConta

let ID = localStorage.getItem('@institution-ID')
let tokensID = ID.split(',')
document.getElementById("ID-money").innerHTML = tokensID[index]

let agency = localStorage.getItem('@institution-agency')
let tokensAgency = agency.split(',')
document.getElementById("agency-money").innerHTML = tokensAgency[index]

let account = localStorage.getItem('@institution-account')
let tokensAccount = account.split(',')
document.getElementById("account-money").innerHTML = tokensAccount[index]