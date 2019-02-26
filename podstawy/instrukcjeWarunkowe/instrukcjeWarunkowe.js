// podstawy
const x = 1;
if (x === 1) { // true - kod się wykona
    console.log('Liczba równa się 1');
}

const x = 2;
if (x !== 2) { // false - kod się nie wykona, bo x = 2
    console.log("Liczba " +x+ "jest różna od 2");
}

// wartości równoznaczne z false, każda inna to true
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all)

// zastosowania
const x2 = 1;
if (x2) { // true
    ...
}

const x3 = 'tekst';
if (x3) { // true bo tekst jest różny od ""
    ...
}

const a = 5;
const b = 5;
if (a-b) { // false bo a-b === 0 (Liczba 0 to false, każda inna to true)
    ...
}

const x4 = '';
if (x4) { // pusty tekst to false
    ...
}

let y;
if (y) { // undefined to false
    ...
}

if (typeof other === "undefined") { //true bo nie mamy zmiennej other
}

//każda funkcja coś zwraca - domyślnie jest to wartość undefined
//poniższa funkcja nie nie ma instrukcji return więc zwraca undefined
function our() {}
if ( our() ) { //false bo undefined
    ...
}

const n = null;
if (n) {...} // null to false

const tab = [];
if (tab + "") { // "" + "" === "" czyli false ***???***
}

const nr = 0;
const str = "";
if (str + nr) { // 0 + "" === "0", czyli true bo różne od ""
}

if (Math.min(0,1,2,3,4,5)) { // 0 === false
}

// else, else if
const x5 = 5;
if (x5 === 1) {
    console.log('Liczba równa się 1')
} else {
    console.log('Liczba nie równa się 1')
}

const name = "Ala";
if (name === "Monika") {
    console.log("Imię to Monika");
} else if (name === "Beata") {
    console.log("Imię to Beata");
} else if (name === "Patrycja") {
    console.log("Imię to Patrycja");
} else {
    console.log("Obiekt nie posiada jeszcze kartoteki");
}

const a = 1;
const b = 2;
const c = 3;
if (a > b && a > c) {
    console.log('a jest największe');
} else {
    if (b > c) {
        console.log('b jest największe');
    } else {
        console.log('c jest największe');
    }
}

const checkName = true;
const name = "Ala";
if (checkName) {
    if (name === "Ala") {
        console.log("Lubi białe wino i filmy Tarantino.");
    }
    if (name === "Beata") {
        console.log("Lubi spacery po molo i lody cytrynowe.");
    }
    if (name === "Monika") {
        console.log("Uważaj, studiuje pedagogike.");
    }
}

// operator warunkowy
// const x = (wyrażenie) ? zwróć_jeżeli_wyrażenie_true : zwróć_jeżeli_wyrażenie_false
const i = 1;
let number = '';
if (i > 0) {
    number = 'dodatnia';
} else {
    number = 'ujemna';
}
//to samo tylko w skróconej wersji
number = (i > 0)? 'dodatnia' : 'ujemna';

const x6 = 3;
console.log( (x6 % 2 === 0)? 'parzysta' : 'nieparzysta' ) // nieparzysta

const isMember = true;
console.log( "The fee is " + (isMember ? "$2.00" : "$10.00") ); // The fee i $2.00

// switch
/*
switch (wyrażenie) {
    case przypadek1:
        //fragment wykonywany gdy rezultat wyrażenia jest równy rezultat1 - potrzebuje break;
        break;
    case przypadek2:
        //fragment wykonywany gdy rezultat wyrażenia jest równy rezultat2 - potrzebuje break;
        break;
    default:
        //fragment wykonywany gdy powyższe rezultaty nie są równe rezultatowi wyrażenia - nie potrzebuje break;
}
*/

const number = 4;
switch (number) {
    case 1:
        console.log('Numer równa się jeden');
        break;
    case 2:
        console.log('Numer równa się dwa');
        break;
    case 3:
        console.log('Numer równa się trzy');
        break;
    case 4:
        console.log('Numer równa się cztery');
        break;
    default:
        console.log('Nie wiem ile równa się numer');
}

const tool = "obcęgi";
//poniższy warunek wypisze "Wybrałeś obcęgi"
//w poniższym przykładzie upiększamy kod za pomocą dodatkowych
//klamer, które nie są wymagane
switch (tool) {
    case 'wiertarka': {
        console.log('Wybrałeś wiertarkę');
        break;
    }
    case 'śrubokręt': {
        console.log('Wybrałeś śrubokręt');
        break;
    }
    case 'obcęgi': {
        console.log('Wybrałeś obcęgi');
        break;
    }
    case 'młotek': {
        console.log('Wybrałeś młotek');
        break;
    }
    default: {
        console.log('Nie wiem co to za narzędzie');
    }
}
