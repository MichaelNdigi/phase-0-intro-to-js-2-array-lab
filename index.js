// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.length =0;
    cats.push("Milo", "Otis", "Garfield", "Ralph");
}

function destructivelyPrependCat(){
    cats.length= 0;
    cats.push("Bob","Milo", "Otis", "Garfield");
}

function destructivelyRemoveLastCat(){
    cats.length= 0;
    cats.push("Milo", "Otis");
}

function destructivelyRemoveFirstCat(){
    cats.length= 0;
    cats.push("Otis", "Garfield");
}

 function appendCat(){
    var appendCat = cats.slice();
    appendCat.push("Broom");
    return appendCat;

}

function prependCat(){
    var prependCat = cats.slice();
    prependCat.unshift("Arnold");
    return prependCat;

}

function removeLastCat(){
    var removeLastCat = cats.slice();
    removeLastCat.pop("Garfield");
    return removeLastCat;

}

function removeFirstCat(){
    var removeFirstCat = cats.slice();
    removeFirstCat.shift("Milo");
    return removeFirstCat;

}
