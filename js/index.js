let subPantButton = document.getElementById("substractPantButton");
let addPantButton = document.getElementById("addPantButton");

let subShirtButton = document.getElementById("substractShirtButton");
let addShirtButton = document.getElementById("addShirtButton");

let calButton = document.getElementById("calculateButton");

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

    document.getElementById(`subtotalLabel`).innerHTML = `${result.toFixed(2)}`;
    document.getElementById(`taxLabel`).innerHTML = `${tax.toFixed(2)}`;
    document.getElementById(`totalLabel`).innerHTML = `${total.toFixed(2)}`;
}

subPantButton.addEventListener("click",subPantQty)
addPantButton.addEventListener("click",addPantQty)

subShirtButton.addEventListener("click",subShirtQty)
addShirtButton.addEventListener("click",addShirtQty)

calButton.addEventListener("click",calculateDetail)
