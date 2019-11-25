let subPantButton = document.getElementById("substractPantButton");
let addPantButton = document.getElementById("addPantButton");

let subShirtButton = document.getElementById("substractShirtButton");
let addShirtButton = document.getElementById("addShirtButton");


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

function subPantQty(){
    let pantqty = subQty(document.getElementById(`pantQuantityLabel`).innerHTML);
    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
}

function addPantQty(){
    let pantqty = addQty(document.getElementById(`pantQuantityLabel`).innerHTML);
    document.getElementById(`pantQuantityLabel`).innerHTML = `${pantqty}`;
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
