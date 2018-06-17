

let btnFood = document.querySelector("#btnFood")
let btnMoney = document.querySelector("#btnMoney")
let btnMedicine = document.querySelector("#btnMedicine")
let btnClothe = document.querySelector("#btnClothe")


btnFood.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("clickedButton", "comida")
})

btnMoney.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("clickedButton", "dinheiro")
})

btnMedicine.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("clickedButton", "remédio")
})

btnClothe.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("clickedButton", "roupa")
})

function redirectingToInstitution() {
    window.location.href = "html/institution.html";
}