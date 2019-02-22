// operatory matematyczne
let x = 5;
let y = x + 2; // y = 7
let y = x - 1; // y = 4
let y = x * 3; // y = 15
let y = x / 2; // y = 2.5
let y = x % 2; // 1 modulo, reszta z dzielenia
let x--; // dekrementacja; x = x - 1
let x++; // inkrementacja; x = x + 1
let y = x-- // (!) y = 5, x = 4
let y = --x // (!) y = 4, x = 4

// w wypadku inkrementacj/dekrementacji istotne jest czy występuje przed czy po
let i = 3;
console.log(++i); //4

let j = 3;
console.log(j++); //3
console.log(j); //4

// operatory przypisania
let myVar =  'Przykładowy tekst';
    myVar += ' który nie';
    myVar += ' zmieścił by się w jednej linijce';

let x = 10;
x -= 5;

// operatory porównania
const myVar = 8;
if (myVar === 10) {
    //ten kawałek kodu się nie wykona
}

if (myVar <= 10) {
    //ten kawałek kodu się wykona
}

if (myVar !== 8) {
    //ten kawałek kodu się nie wykona
}

// operatory logiczne
const myVar = 8;
const myVar2 = 15;

if (myVar === 8 && myVar2 === 10) {
    //ten kawałek kodu się nie wykona bo mamy "i", oba muszą być spełnione, a nie są
}

if (myVar === 8 || myVar2 === 8) {
    //ten kawałek się wykona bo mamy "lub" - jeden z warunków jest poprawny
}

if (myVar === 8 ^ myVar2 === 15) {
    //ten kawałek się nie wykona bo mamy "xor", a oba są spełnione
}

if (!(myVar === 8)) {
    //ten kawałek się nie wykona, bo mamy negację!
    //powyższy warunek jest jednoznaczny z myVar !== 8
}

if ((myVar === 2) || 1) {
    //ten kawałek zawsze się wykona, bo myVar nie jest 2,
    //ale drugi fragment warunku zawsze zwróci true (1 jest rzutowana na true)
}
