
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

ref.on('value', gotData, errData)

function gotData(data) {
  console.log(data.val())
}

function errData(err) {
  console.log("Error" + err)
}