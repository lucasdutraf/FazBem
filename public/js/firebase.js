
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

var ref = database.ref('institutions/dinheiro')
console.log(data)

var data = {
  name: 'ProAnima',
  address: 'St. Sul Quadra 07 AE Lote AB Gama Brasília DF',
  cep: '72410-420',
  contact: '(61) 3327-9390', 
  about: 'A ProAnima é uma associação sem fins lucrativos, de caráter socioambientalista, fundada em 31 de outubro de 2003. Nossa missão é promover a harmonia nas interações entre humanos e animais. Temos um estatuto e regimento interno que prevê direitos e deveres de associados, formas democráticas de gestão e um ideário que reúne nossos princípios e norteia nosso trabalho.',
  lat: '-15.905749',
  lng: '-47.761579',
  ID: '05.992.115/0001-23',
  agency_account: '3603-x',
  bank_account: '23.382-8' 
}

ref.push(data)
