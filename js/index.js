let subButton = document.getElementById("substractButton");
let addButton = document.getElementById("addButton");
let calButton = document.getElementById("calculateButton");
let promoButton = document.getElementById("promoButton");

let pantQuantity = 0;
let shirtQuantity = 0;

let pantPrice = 0;
let shirtPrice = 0;
let pantUnitPrice = 40.99;
let shirtUnitPrice = 10.99;

let pantExtendedPrice = 0;
let shirtExtendedPrice = 0;

document.getElementById(`pantQuantityLabel`).innerHTML = `${pantQuantity}`;
document.getElementById(`pantQuantityLabel`).innerHTML = `${shirtQuantity}`;

document.getElementById(`pantUnitPriceLabel`).innerHTML = `$ ${pantPrice.toFixed(2)}`;
document.getElementById(`shirtUnitPriceLabel`).innerHTML = `$ ${shirtPrice.toFixed(2)}`;

document.getElementById(`pantExtendedPriceLabel`).innerHTML = `$ ${pantExtendedPrice.toFixed(2)}`;
document.getElementById(`shirtExtendedPriceLabel`).innerHTML = `$ ${shirtExtendedPrice.toFixed(2)}`;


function quantity(pantQuantity){
    quan = pantQuantity + 1;
    return quan;
}
addButton.addEventListener("click",quantity)
