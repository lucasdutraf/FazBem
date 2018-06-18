
// Initialize Firebase
var config = {
  apiKey: "AIzaSyATU-j8JH1Blwx0wUG2ZKQ0Nln04xgjJBQ",
  authDomain: "faz-bem.firebaseapp.com",
  databaseURL: "https://faz-bem.firebaseio.com",
  projectId: "faz-bem",
  storageBucket: "faz-bem.appspot.com",
  messagingSenderId: "253971616099"
};
firebase.initializeApp(config);

var database = firebase.database()
var ref = database.ref('institutions')

/* enviar dado para o storage do firebase
var data = {
  name: 'Abrigo Flora e Fauna',
  address: 'Núcleo Rural Ponte Alta de Baixo - Gama, Brasília - DF,',
  contact: '(61) 99826-5882'
}
ref.push(data)
*/

ref.on('value', gotData, errData)

function gotData(data) {
  
  var institutions = data.val();
  var keys = Object.keys(institutions)

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
  console.log(name, address, contact)
}

function errData(err) {
  console.log("Error" + err)
}
