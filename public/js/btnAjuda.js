

let btnFood = document.querySelector("#btnFood");
let btnMoney = document.querySelector("#btnMoney");
let btnMedicine = document.querySelector("#btnMedicine");
let btnClothe = document.querySelector("#btnClothe");

btnFood.addEventListener("click", function(event) {

    event.preventDefault();
    alert("Food");
});

btnMoney.addEventListener("click", function(event) {

    event.preventDefault();
    alert("Money");
});

btnMedicine.addEventListener("click", function(event) {

    event.preventDefault();
    alert("Medicine");
});

btnClothe.addEventListener("click", function(event) {

    event.preventDefault();
    alert("Clothe");
})