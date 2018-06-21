
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

    document.getElementById("sobre-instituicao").innerHTML = name
}

function errData(err) { 
    alert("Não foi possível carregar as instituições")
    console.log(err) 
}

