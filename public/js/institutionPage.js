
 
let clickedButton = localStorage.getItem("@help-option")
document.getElementById("titulo-tipo-de-ajuda").innerHTML = "Instituições que precisam de " + clickedButton

let database = firebase.database()
var ref = database.ref('institutions/' + getHelpOption())
ref.on('value', gotData, errData)


function getHelpOption() {

    if(localStorage.getItem("@help-option") === 'comida')
        return 'food'
    if(localStorage.getItem("@help-option") === 'dinheiro')
        return 'money'
    if(localStorage.getItem("@help-option") === 'remédio')
        return 'medicine'
    if(localStorage.getItem("@help-option") === 'roupa')
        return 'clothe'

}

