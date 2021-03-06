

function gotData(data) {

    let institutions = data.val();
    let keys = Object.keys(institutions)
    
    var name = []
    var address = [] 
    var contact = []
    var cep = []
    var about = []
    var lat = []
    var lng = []
    var ID = []
    var agency_account = []
    var bank_account = []

    for(let i = 0; i < keys.length; i++) {
        let k = keys[i]
        name[i] = institutions[k].name
        address[i] = institutions[k].address
        contact[i] = institutions[k].contact
        cep[i] = institutions[k].cep
        about[i] = institutions[k].about
        lat[i] = institutions[k].lat
        lng[i] = institutions[k].lng
        ID[i] = institutions[k].ID
        agency_account[i] = institutions[k].agency_account
        bank_account[i] = institutions[k].bank_account
    }
    localStorage.setItem("@institution-names", name);
    localStorage.setItem("@institution-addresses", address);
    localStorage.setItem("@institution-contacts", contact);
    localStorage.setItem("@institution-cep", cep);
    localStorage.setItem("@institution-about", about);
    localStorage.setItem("@institution-lat", lat);
    localStorage.setItem("@institution-lng", lng);
    localStorage.setItem("@institution-ID", ID);
    localStorage.setItem("@institution-agency", agency_account);
    localStorage.setItem("@institution-account", bank_account);

    loadDataIntoHTML(name, address, contact)
}

function errData(err) { 
    alert("Não foi possível carregar as instituições")
    console.log(err) 
}

function loadDataIntoHTML(name, address, contact) {

    console.log(name, address, contact)
    let institutionsList = document.querySelector(".lista-instituicao")

    for(let i = 0; i < name.length; i++) {
        createAndAppendInstitutionHTML(institutionsList, i)
        document.getElementById('nome-instituicao-' + i).innerHTML = name[i]
    }
    
}

function createAndAppendInstitutionHTML(institutionsList, index) {

    let  = document.querySelector(".lista-instituicao")

    let institution = document.createElement('a')
    institution.setAttribute('id', 'nome-instituicao-' + index)
    institution.setAttribute('class', 'nome-instituicao')   
    institution.setAttribute('onclick', 'clickListener(' + index + ')')
    institutionsList.appendChild(institution)
}



function clickListener(index) {

    localStorage.setItem('@indexOfInstitutionsList', index)

    if(localStorage.getItem('@help-option') !== 'dinheiro')
        window.location.href = "./institution-general.html";
    else 
        window.location.href = "./institution-money.html";
}

