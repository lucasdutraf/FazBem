

let btnFood = document.querySelector("#btnFood")
let btnMoney = document.querySelector("#btnMoney")
let btnMedicine = document.querySelector("#btnMedicine")
let btnClothe = document.querySelector("#btnClothe")


btnFood.addEventListener("click", function(event) {
    redirectingToInstitution()
})

btnMoney.addEventListener("click", function(event) {
    redirectingToInstitution()
})

btnMedicine.addEventListener("click", function(event) {
    redirectingToInstitution()
})

btnClothe.addEventListener("click", function(event) {
    redirectingToInstitution()
})

function redirectingToInstitution() {
    window.location.href = "html/institution.html";
}