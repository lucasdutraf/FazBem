
let btnFood = document.querySelector("#btnFood")
let btnMoney = document.querySelector("#btnMoney")
let btnMedicine = document.querySelector("#btnMedicine")
let btnClothe = document.querySelector("#btnClothe")


btnFood.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("@help-option", "comida")
})

btnMoney.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("@help-option", "dinheiro")
})

btnMedicine.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("@help-option", "remédio")
})

btnClothe.addEventListener("click", function(event) {
    redirectingToInstitution()
    localStorage.setItem("@help-option", "roupa")
})


function redirectingToInstitution() {
    window.location.href = "html/institution.html";
}