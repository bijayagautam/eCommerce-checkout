let subPantButton = document.getElementById("substractPantButton");
let addPantButton = document.getElementById("addPantButton");

let subShirtButton = document.getElementById("substractShirtButton");
let addShirtButton = document.getElementById("addShirtButton");

let calButton = document.getElementById("calculateButton");

let promoClickButton = document.getElementById("promoButton");


let pantQuantity = 0;
let pantUnitPrice = 49.99;
let extendedPrice = 0;

let shirtQuantity = 0;
let shirtUnitPrice = 10.99;

document.getElementById(`pantQuantityLabel`).innerHTML = `${pantQuantity}`;
document.getElementById(`pantUnitPriceLabel`).innerHTML = `${pantUnitPrice}`;
document.getElementById(`pantExtendedPriceLabel`).innerHTML = `${extendedPrice}`;

document.getElementById(`shirtQuantityLabel`).innerHTML = `${shirtQuantity}`;
document.getElementById(`shirtUnitPriceLabel`).innerHTML = `${shirtUnitPrice}`;
document.getElementById(`shirtExtendedPriceLabel`).innerHTML = `${extendedPrice}`;



function subQty(quantity){
    if (quantity <= 0){
        return 0;
    }
    else{
        return(--quantity);
    }
}

function addQty(quantity){
    return(++quantity);
}

function getPrice(price, quantity){
    return(price * quantity);
}

function subPantQty(){
    let pantqty = subQty(document.getElementById(`pantQuantityLabel`).innerHTML);
    let pantUnitPrice = 49.99;
    let extendedPrice = getPrice(pantUnitPrice,pantqty)
    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
    document.getElementById(`pantUnitPriceLabel`).innerHTML = `${pantUnitPrice}`;
    document.getElementById(`pantExtendedPriceLabel`).innerHTML = `${extendedPrice.toFixed(2)}`;
}

function addPantQty(){
    let pantqty = addQty(document.getElementById(`pantQuantityLabel`).innerHTML);
    let pantUnitPrice = 49.99;
    let extendedPrice = getPrice(pantUnitPrice,pantqty)

    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
    document.getElementById(`pantUnitPriceLabel`).innerHTML = `${pantUnitPrice}`;
    document.getElementById(`pantExtendedPriceLabel`).innerHTML = `${extendedPrice.toFixed(2)}`;

}

function subShirtQty(){
    let shirtqty = subQty(document.getElementById(`shirtQuantityLabel`).innerHTML);
    let shirtUnitPrice = 10.99;
    let extendedPrice = getPrice(shirtUnitPrice,shirtqty)

    document.getElementById(`shirtQuantityLabel`).innerHTML = `${shirtqty}`;
    document.getElementById(`shirtUnitPriceLabel`).innerHTML = `${shirtUnitPrice}`;
    document.getElementById(`shirtExtendedPriceLabel`).innerHTML = `${extendedPrice.toFixed(2)}`;
}

function addShirtQty(){
    let shirtqty = addQty(document.getElementById(`shirtQuantityLabel`).innerHTML);
    let shirtUnitPrice = 10.99;
    let extendedPrice = getPrice(shirtUnitPrice,shirtqty)

    document.getElementById(`shirtQuantityLabel`).innerHTML = `${shirtqty}`;
    document.getElementById(`shirtUnitPriceLabel`).innerHTML = `${shirtUnitPrice}`;
    document.getElementById(`shirtExtendedPriceLabel`).innerHTML = `${extendedPrice.toFixed(2)}`;
}

function calculateDetail(){
    let pantExtPrice = parseFloat(document.getElementById("pantExtendedPriceLabel").innerHTML);
    let shirtExtPrice = parseFloat(document.getElementById("shirtExtendedPriceLabel").innerHTML);
    let result = pantExtPrice + shirtExtPrice;
    let tax = result * 13/100;
    let total = result + tax;
    let copn = document.getElementById("promoTextBox").value;

    let couponValidation = validatePromoCode(copn);
    if(couponValidation == "NOTAX"){
        total = result;
    }
    if(couponValidation == "FIFTYFIFTY"){
        result = (pantExtPrice + shirtExtPrice)/2;
        tax = result * 13/100;
        total = result + tax;
    }
    if(couponValidation == false){
        document.getElementById('promoTextBox').innerHTML="Invalid coupon"
    }
    

    document.getElementById(`subtotalLabel`).innerHTML = `${result.toFixed(2)}`;
    document.getElementById(`taxLabel`).innerHTML = `${tax.toFixed(2)}`;
    document.getElementById(`totalLabel`).innerHTML = `${total.toFixed(2)}`;
}

function validatePromoCode(coupon) {
    var promoCodeOne = "NOTAX";
    var promoCodeTwo = "FIFTYFIFTY";
    var promoInput = document.getElementById('promoTextBox').value;
    if(promoInput.toUpperCase() == promoCodeOne.toUpperCase()) {
        return promoCodeOne;
    }if(promoInput.toUpperCase() == promoCodeTwo.toUpperCase()) {
        return promoCodeTwo;
    } else {
        document.getElementById('promoTextBox').innerHTML="Invalid coupon";
        return false;
    }
}

function showPromoTextBox(){
    document.getElementById("promoTextBox").style.display = "block";
}

function hidePromoTextBox(){
    document.getElementById("promoTextBox").style.display = "none";
}

subPantButton.addEventListener("click",subPantQty)
addPantButton.addEventListener("click",addPantQty)

subShirtButton.addEventListener("click",subShirtQty)
addShirtButton.addEventListener("click",addShirtQty)

calButton.addEventListener("click",calculateDetail)

promoClickButton.addEventListener("click",showPromoTextBox)

window.addEventListener("load",hidePromoTextBox)
