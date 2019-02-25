text8text8// długość łańcucha  znaków
let text = "Ala ma kota, a kot ma Ale. ";
console.log( text.length ); // 26 (string posiada własności i metody)

text = text + 'Ala go lubi, a kot ją wcale...'; // konkatenacja
console.log(text); //wypisze "Ala ma kota, a kot ma Ale. Ala go lubi, a kot ją wcale..."

const word = "JS ";
let text2 = "";
for (let i=0; i<10; i++) {
    text2 += word;
}
console.log(text2); //wypisze "JS JS JS JS JS JS JS JS JS JS"

// deklaracja za pomocą literału
const textLit1 = "abc";
const textLit2 = "abc";
console.log(textLit1 === textLit2); // true

// deklaracja za pomocą konstruktora
const textKon1 = new String("abc");
const textKon2 = new String("abc");
console.log(textKon1 === textKon2); // false, ponieważ porównujemy 2 obiekty, a nie wartości
console.log(typeof textKon1); // object

// pobieranie znaku z danej pozycji
const text3 = "Ala ma kota, a kot ma Ale";

// metoda zadziała w każdej przeglądarce
console.log(text3.charAt(0)); //A
console.log(text3.charAt(4)); //m

// metoda działa w IE > 8
console.log(text3[0]); //A
console.log(text3[4]); //m
console.log(text3.charAt(text3.length-1)); //e
console.log(text[text3.length-1]); //e

// .charCodeAt zwraca kod ASCII
const text4 = "Ala ma kota";
console.log(text4.charCodeAt(0)); //65 (A)
console.log(text4.charCodeAt(4)); //109 (m)

// metody .toUpperCase() oraz .toLowerCase()
const text5 = "Ala ma kota";
console.log(text5.toUpperCase()); //ALA MA KOTA
console.log(text5.toLowerCase()); //ala ma kota

// sposób na zmiane pierwszej litery w łańcuchu
const text6 = "jacek";
console.log( text6.charAt(0).toUpperCase() + text6.slice(1) ); // Jacek

// metoda IndexOf() i lastIndexOf()
"Ala ma kota".indexOf("kota"); // 7
"Ala ma kota".indexOf("psa"); // -1 (szukanego fragmentu nie ma w łańcuchu)

// sprawdzamy czy ciąg "psa" istnieje
const text7 = "Ala ma kota";
if (text7.indexOf("psa") > -1) {
    console.log("Ala ma psa" );
} else {
    console.log("Ala ma kota" );
}

// zastosowanie lastIndexOf()
"Ala ma kota i tak już jest".lastIndexOf("a"); // 15 - bo ostatnia litera "a" występuje na pozycji 15

const url = "http://nazwastrony.pl/przykladowaNazwaPliku.php";
// korzystając z metod opisanych poniżej tniemy url na części
console.log( url.slice(url.lastIndexOf(".")+1) ); // php
console.log( url.slice(url.lastIndexOf("/")+1, url.lastIndexOf(".")) ); // przykladowaNazwaPliku

// metoda .substr(początek, koniec), .substring(początek, ilość znaków) -- zwraca wycinek tekstu
const text8 = "Ala ma kota";
console.log(text8.substr(0)); // Ala ma kota
console.log(text8.substr(0, 3)); // Ala
console.log(text8.substr(7, 4)); // kota
console.log(text8.substr(4, text8.length - 4)); // wypisze tekst od 4 litery do końca - "ma kota"
console.log(text8.substr(-4, 3)); // kot - wypisze 3 litery zaczynając od 4 od końca
console.log(text8.substring(0, 3)); // Ala
console.log(text8.substring(4)); // ma kota
console.log("Ala ma kota".substring(6, 4)); // ma

// metoda .slice()
const txt = "Ala ma kota";
const txt2 = txt.slice(0,3);
console.log(txt2); // Ala
const txt3 = txt.slice(1,5);
console.log(txt3); // la m
const txt4 = txt.slice(4 , 6);
console.log(txt4); // ma
const txt5 = txt.slice(4);
console.log(txt5); // ma kota
const txt6 = txt.slice(-4);
console.log("Ala już nie ma " + txt6 + ", bo kocur jej zwiał..."); // Ala już nie ma kota, bo kocur jej zwiał...

// metody .split() i .replace()
const text9 = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
const pieces = text9.split(", "); // umieści części zdania w nowej tablicy

for (let i=0; i<pieces.length; i++) {
    console.log(pieces[i].toUpperCase()); // wypisze kolejne części zdania wielkimi literami
}

const text10 = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
const textChanged = text10.replace("Ala", "Ola");
console.log(textChanged); // zamieni tylko pierwsze wystąpienie "Ala"
const textChanged2 = text10.replace(/Al/g,"Ol");
console.log(textChanged2); // zastosowałem wyrazenia regularne, zamieni wszystkie "Al"

// metody .encodeURI i .decodeURI
const text11 = "Ala ma kota, a kot ma Alę...";
console.log("Przed: " + text11); //Ala ma kota, a kot ma Alę...
console.log("Po: " + encodeURI(text11)); //Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...

text12 = "Ala%20ma%20kota,%20a%20kot%20ma%20Al%C4%99..."
console.log("Przed: " + text12); //Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...
console.log("Po: " + decodeURI(text12)); //Ala ma kota, a kot ma Alę...
