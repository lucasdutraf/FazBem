
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



/*
database = firebase.database()

var ref = database.ref('institutions/dinheiro')
console.log(data)

var data = {
  name: 'Promovida',
  address: 'Rua do Calc 270 Bairro Centro São Sebastião Brasília DF',
  cep: '71691-047',
  contact: '(61)3335-7031',
  about: 'O Projeto PROMOVIDA nasceu em 17 de Agosto de 1998 pela iniciativa do Colégio La Salle da Comunidade de São Sebastião DF e das irmãs de São Vicente de Paulo Servas dos Pobres com o objetivo de tirar as crianças das ruas. Em 1999 a Paróquia Nossa Senhora do Perpétuo Socorro do Lago Sul juntou-se a grupo e passou a administrar a Instituição.',
  lat: '-15.905749',
  lng: '-47.761579',
  ID: '03.126.941/0001-64',
  agency_account: '3129-1',
  bank_account: '6081-X' 
}

ref.push(data)
*/
