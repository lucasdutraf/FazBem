
 
let clickedButton = localStorage.getItem("@help-option")
document.getElementById("titulo-tipo-de-ajuda").innerHTML = "Instituições que precisam de " + clickedButton


let database = firebase.database()
var ref = database.ref('institutions/' + getHelpOption())
ref.on('value', gotData, errData)


    
function gotData(data) {

    let institutions = data.val();
    let keys = Object.keys(institutions)
    var name = []
    var address = [] 
    var contact = []

    for(let i = 0; i < keys.length; i++) {
        let k = keys[i]
        name[i] = institutions[k].name
        address[i] = institutions[k].address
        contact[i] = institutions[k].contact
    }
    localStorage.setItem("@institution-names", name);
    localStorage.setItem("@institution-addresses", address);
    localStorage.setItem("@institution-contacts", contact);

    document.getElementById("institution-name").innerHTML = name
}

function errData(err) { 
    alert("Não foi possível carregar as instituições")
    console.log(err) 
}

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

