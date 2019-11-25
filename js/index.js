let subPantButton = document.getElementById("substractPantButton");
let addPantButton = document.getElementById("addPantButton");

let subShirtButton = document.getElementById("substractShirtButton");
let addShirtButton = document.getElementById("addShirtButton");

let pantQuantity = 0;
let pantUnitPrice = 49.99;
let extendedPrice = 0;
document.getElementById(`pantQuantityLabel`).innerHTML = `${pantQuantity}`;
document.getElementById(`pantUnitPriceLabel`).innerHTML = `$ ${pantUnitPrice}`;
document.getElementById(`pantExtendedPriceLabel`).innerHTML = `$ ${extendedPrice}`;


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
    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
}

function addPantQty(){
    let pantqty = addQty(document.getElementById(`pantQuantityLabel`).innerHTML);
    let pantUnitPrice = 49.99;
    let extendedPrice = getPrice(pantUnitPrice,pantqty)
    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
    document.getElementById(`pantUnitPriceLabel`).innerHTML = `$ ${pantUnitPrice}`;
    document.getElementById(`pantExtendedPriceLabel`).innerHTML = `$ ${extendedPrice}`;

}

function subShirtQty(){
    let shirtqty = subQty(document.getElementById(`shirtQuantityLabel`).innerHTML);
    document.getElementById(`shirtQuantityLabel`).innerHTML = `${shirtqty}`;
}

function addShirtQty(){
    let shirtqty = addQty(document.getElementById(`shirtQuantityLabel`).innerHTML);
    document.getElementById(`shirtQuantityLabel`).innerHTML = `${shirtqty}`;
}

subPantButton.addEventListener("click",subPantQty)
addPantButton.addEventListener("click",addPantQty)

subShirtButton.addEventListener("click",subShirtQty)
addShirtButton.addEventListener("click",addShirtQty)
