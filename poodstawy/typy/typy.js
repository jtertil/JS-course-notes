// przykłady danych typu prostego
const nr = 20; //liczba
const nr2 = 5.3483234 //jw.
const tekst = "przykładowy tekst" // tekst
const log = true; // wartosć logiczna true / false
const nic = null; //nic
const x; //stała bez określonej wartości.

// tymczasowa konwersja na obiekt
tekst.length // 17 (JS dokona konwersji 'tekst' na obiekt String i uruchomi metodę length
nr2.toFixed(2) // 5.35 (jw. tymczasowa konwersja na obiekt, zastosowanie metody)

// użycie konstruktora
const varNr = new Number(20); // liczba
const varTekst = new String("przykładowy tekst") // łańcuch znakówarn
const varLog = new Boolean(true); // wartość logiczna

// wykazanie różnicy
const varA = "lorem ipsum";
const varB = new String("lorem ipsum"); //użycie konstruktora
console.log( varA.length ); //11
console.log( varB.length ); //11
console.log( typeof varA ); //string
console.log( typeof varB ); //object

// przypisanie wartości zmiennym typu prostego
let var1 = 12;
let var2 = var1; // zmiennej var2 przypisuje wartość var1 czyli 12
var2 = 15; // zmieniam wartość var2
console.log(var1) //12
console.log(var2) //15


// przykłady danych typu złożonego

/*
Wszystkie zmienne nie będące typem prostym są obiektami i są typu referencyjnego.
Ten typ danych charakteryzuje się tym, że zmienne nie mają przypisanej bezpośrednio wartości,
a tylko wskazują na miejsce w pamięci, gdzie te dane są przetrzymywane.
*/

let arr1 = [1,2,3]; // deklaracja zmiennej, tablica
let arr2 = arr1 // zmienna arr2 wskazuje na tablicę arr1
arr1.push(4); // dodanie wartości 4 do tablicy arr1 metodą push
console.log(arr1); //1, 2, 3, 4
console.log(arr2); //1, 2, 3, 4 - zmieniły się obydwie tablice

let arr1 = [1, 2, 3];
let arr2 = arr1.slice(); //kopiuje całą tablicę za pomocą metody slice()
arr1.push(4);
console.log(arr1); //1, 2, 3, 4
console.log(arr2); //1, 2, 3

// sprawdzanie typu danych
const num = 10;
const str = 'przykładowy tekst';
const arr = [];
const obj = {};
const nic = null;

//wypisujemy typy zmiennych
console.log( typeof num ); //"number"
console.log( typeof str ); //"string"
console.log( typeof arr ); //"object" hmm?
console.log( typeof obj ); //"object"
console.log( typeof und ); //"undefined"
console.log( typeof nic ); //"object" hmm?

//sprawdzamy typy zmiennych
// if (typeof num === "number") {...}
// if (typeof str === "string") {...}
// if (Array.isArray(arr)) {...}
// if (typeof obj === "object") {...}
// if (typeof nic === "undefined") {...}
// if (nic === null) {...}

// automatyczna konwersja typów
let someVar = 10;
someVar = "a teraz jest to tekst";
/*
Z jednej strony jest to fajne, bo upraszcza sprawę.
Z drugiej może powodować błędy w bardziej skompilowanych skryptach.
Dlatego też w każdym większym języku (np C++) konieczne jest określanie typów danych.
Dlatego też powstały dla JavaScript takie nakładki jak TypeScript.
*/
23 + true  //24, bo true zostało skonwertowane na 1
true + true + true  //3
true + false  //1, bo false zostało skonwertowane na 0
true + {}  //"true[object Object]" - konwersja true na 1 i tak by nic nie dała, bo 1 do obiektu nie da się dodać. Dlatego zostało "true"
23 + 2 * []  //23 - bo tablica została skownerowana na 0

// manualna konwersja
let str = "123";
let str2 = "123.54"
Number(str) // konwertuje tekst na liczbę
parseInt(str, 10) // parsuje tekst na liczbę o podstawie 10 - system dziesiętny
parseFloat(str2) // parsuje tekst na liczbe zmiennoprzecinkową.

// alternatywne metody konwersji:
console.log( +"20" ); //20
console.log( "20" * 1 ); //20
console.log( "20" / 1 ); //20
console.log( ~~"20" ); //20
