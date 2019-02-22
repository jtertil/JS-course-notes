/*
nazwa zmiennej nie może zaczynać się od cyfry,
nazwa zmiennej nie może zawierać spacji (można zamiast spacji używać podkreślenia),
nazwą zmiennej nie może być słowo kluczowe zarezerwowane przez JavaScript.

Nazywaj swoje zmienne tak, by dało się zrozumieć do czego się odnoszą.

*/

// deklarowanie zmiennej przy użyciu var
var myVar = "Przykładowy tekst"; //zmienna o nazwie myVar
// nazwy zmiennych pisane wielkimi literami, sugerują, że dana wartość jest stała.
// jest to jednak jedynie konwencja, wartość pozostaje zmienną
var COUNT = 200;
COUNT = 100;
console.log(COUNT) // 100


console.log(myVar); // hoisting zmiennych - używam zmiennej, której jeszcze nie ma. Nie ma błędu!
var myVar = 20;

// zmienne zadeklarowane przy użyciu var mają zasięg funkcyjny (nie blokowy)
function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a); //50
    } //
    console.log(a); //50
}
testVar(); //50 50


// deklarowanie zmiennych przy użyciu const i let
let myVar = "Przykładowy tekst"; //zmienna o nazwie myVar
myVar = "Inny tekst";

const myImportantVar = "Stała o niezmiennej wartości";
myImportantVar = "Inny tekst"; //błąd - nie można zmieniać stałej

const btn = document.querySelector('.btn'); //pobieram element ze strony i podstawiam pod stałą
console.log( btn.innerText ); //za pomocą zmiennej wypisuję tekst w buttonie

// zmienne zadeklarowane przy użyciu let i const mają zasięg  blokowy, (zawarty między { i })
function testVar() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a); //50
    } // tu końcy się blok
    console.log(a); //30
}
testVar(); //50 30

// przykład 2
{
    let myVar = 20;
}
console.log(myVar); //błąd - jestem poza blokiem, tutaj zmienna nie ma zakresu

// w prypadku let i const nie działa hoisting zmiennych
console.log(myVar); //błąd - bo zmienna myVar nie istnieje
let myVar = 20;

// różnica miedzy let i const
let zmienna = "wartość";
zmienna = "inna wartość"; // nastąpi zmiana wartośći, wszystko ok

const stala = "stala wartość";
stala = "inna wartość"; // błąd - do stałej nie można przypisać nowej wartosci

const tab = [1,2,3];
tab = [1,2,3,4]; // błąd - próbuję podstawić nową tablicę
tab[3] = 4; // tu ok - jedynie dodaje element do już istniejącej tablicy

const kot = {nazwa: 'Filemon', kolor: 'szary'};
kot.kolor = "biały"; // wszystko ok, zmieniam składową obiektu
kot = {nazwa: 'Bonifacy', kolor: 'czarny'} // błąd - próbuje podstawić nowy obiekt
