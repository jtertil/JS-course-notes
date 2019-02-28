/*
for (zainicjowanie_licznika;  warunek_kończący_wykonywanie_pętli;  zwiększenie_zmniejszenie_licznika) {
    kod który zostanie wykonany pewną ilość razy
}
*/

for (let i=0; i<10; i++) {
    console.log('pojawię się w konsoli 10 razy, to jest ' + (i+1) + ' raz.');
}

// odliczanie może być realizowane w dół
let str = "Trwa odliczanie: ";
for (let i=5; i>=0; i--) {
    console.log(str + i);
}

// operator logiczny w warunku kończącym
const a = 10;
const b = 20;
for (let i=1; i<=a && i<=b; i++) {
    console.log("Wypiszę się tyle razy ile wynosi mniejsza z liczb", i);
}

/*
while (wyrażenie-sprawdzające-zakończenie-pętli) {
    ...fragment kodu który będzie powtarzany...
}
*/

let i = 1;
while (i <= 10) {
    console.log("Policzmy ile razy się wykonam: " + i);
    i++;
}

let i2 = 1;
let rnd = 0;
while (rnd < 0.8) {
  rnd = Math.random();
  i2++;
  console.log("test " + i2 + ": " + rnd );
}

// wariantem pętli while jest pętla do while, petla tego typu wykona się min 1 raz
let i3 = 0;
do {
  i3++;
  console.log("Policzmy: " + i3);
} while (i3 < 10)

// pętle zagnieżdźone
for (let i=0; i<10; i++) {
    console.log('%c Pętla główna nr: ' + i, 'color:red');
    for (let j=0; j<6; j++) {
        console.log('%c Pętla wewnętrzna nr: ' + j, 'color:blue');
    }
}

/*

******
*----*
*----*
******

*/
let str2 = "\n";
for (let i=0; i<4; i++) {
    for (let j=0; j<6; j++) {
        if (i==0 || i>=3 || j==0 || j>=5) {
            str2 += '*';
        } else {
            str2 += '-';
        }
    }
    str2 += "\n";
}
console.log(str2);

// treracja po stringach, tablicach, elementach
const txt = "Ala ma kota";
for (let i=0; i<txt.length; i++) {
    console.log(  txt.charAt(i)  ); //do pobrania znaku na danej pozycji używamy charAt()
}

const tab = ['Ala', 'Monika', 'Patrycja'];
for (let i=0; i<tab.length; i++) {
    console.log( tab[i] );
}

const p = document.querySelectorAll('p'); //pobieramy wszystkie paragrafy z dokumentu
for (let i=0; i<p.length; i++) {
    p[i].style.color = 'red'; //każdy paragraf na czerwono
}

// pętla for of (ES6)
const tab2 = [1,2,3,4];
for (const el of tab2) {
    console.log(el);
}

const buttons = document.querySelectorAll('button');
for (const btn of buttons) {
    console.log(btn);
}

const txt2 = "ALa ma kota";
for (const i of txt2) {
    console.log(i.toUpperCase());
}

// break i continue
const tab3 = ["Ala", "Monika", "Beata", "Karol"];
let userExist = false;
for (let i=0; i<tab.length; i++) {
    if (tab[i] === "Beata") {
        userExist = true;
        break; //dalej nie ma sensu sprawdzać
    }
}

let evenNr = null;
while (true) { //nieskończony warunek
    evenNr = Math.floor(Math.random() * 1000);
    if (evenNr % 2 === 0) { // czy parzysta?
        break;
    }
}

const tab4 = ["Ala", "Monika", "Beata", "Karol", "Patrycja"];
for (let i=0; i<tab4.length; i++) {
    if (tab4[i] === "Karol") {
        continue; //Karola pomijamy
    }
    console.log(tab[i]);
}

let x = 0;
let arr = [];
while (x < 5) {
  x++; // istotne by inkrementować przed sprawdzeniem warunku, inaczej petla zawiesi skrypt gdy warunek będzie spełniony
  if (x === 3) {
    continue;
  } arr.push(x)
} console.log(arr)
