
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




database = firebase.database()

var ref = database.ref('institutions/alimento')
console.log(data)

var data = {
  name: 'Fundação CDL',
  address: 'SIA Trecho 17 Via IA-4 Lote 815 Brasília DF',
  cep: '70200-260',
  contact: '(61)3218-1513',
  about: 'A Fundação CDL-DF é uma entidade jurídica de direito privado sem fins lucrativos que visa garantir o efetivo direito da criança e do adolescente à convivência familiar e comunitária e à proteção integral promovendo a inclusão social e prevenindo a violação de direitos infanto-juvenis.',
  lat: '-15.797895',
  lng: ' -47.963356',
  ID: 'X',
  agency_accout: 'X',
  bank_account: 'X' 
}

ref.push(data)

