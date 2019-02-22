/*
Javascript udostępnia nam obiekt Math.
Obiekt ten za pomocą swoich funkcjonalności ułatwia nam przeprowadzanie
matematycznych operacji.
*/

// właściwośći obiektu Math
Math.E	// zwraca stałą Eulera, która wynosi ok. 2.71
Math.LN2	// zwraca logarytm dwóch, tj. ok. 0.69
Math.LN10	// zwraca logarytm z dziesięciu, tj. ok. 2.30
Math.LOG2E	//zwraca logarytm o podstawie 2 z liczby E, czyli ok. 1.44
Math.LOG10E	// zwraca logarytm o podstawie 10 z E, czyli ok. 0.43
Math.PI	// zwraca wartość liczby Pi, czyli ok. 3.14
Math.SQRT1_2	// zwraca pierwiastek kwadratowy z 0.5, czyli ok. 0.70
Math.SQRT2	// zwraca pierwiastek kwadratowy z 2, czyli ok. 1.41

// metody obiektu Math
Math.abs()	// zwraca wartość absolutną liczby
Math.acos()	// zwraca arcus cosinus z liczby (podanej w radianach)
Math.asin()	// zwraca arcus sinus z liczby (podanej w radianach)
Math.atan()	// zwraca arcus tangens z liczby (podanej w radianach)
Math.ceil()	// zwraca najmniejszą liczbę całkowitą, większą lub równą podanej liczbie
Math.cos()	// zwraca cosinus liczby (podanej w radianach)
Math.exp()	// zwraca wartość E podniesionej do potęgi wyrażonej podanym argumentem
Math.floor()	// zwraca największą liczbę całkowitą mniejszą lub równą podanej liczbie
Math.log()	// zwraca logarytm naturalny liczby
Math.max()	// zwraca większą z dwóch liczb
Math.min()	// zwraca mniejszą z dwóch liczb
Math.pow()	// zwraca wartość liczby1 podniesionej do potęgi liczby2
Math.random()	// zwraca wartość pseudolosową z przedziału 0 // 1
Math.round()	// zwraca zaokrąglenie danej liczby do najbliższej liczby całkowitej
Math.sin()	// zwraca sinus liczby (podanej w radianach)
Math.sqrt()	// zwraca pierwiastek kwadratowy liczby
Math.tan()	// zwraca tangens liczby (podanej w radianach)

// przykłady
const var1 = 56.5;
const var2 = 74.3;
Math.min(var1, var2) //56.5
Math.max(var1, var2)) //74.3
Math.max(1,3,6,2) //6
Math.cos(0) //1
Math.abs(-1) //1
Math.round(var1) //56
Math.round(20.52) //21
Math.round(-10.21) //-10
Math.round(-11.82) //-12
Math.floor(var1) //56
Math.floor(20.52) //20
Math.floor(-10.21) //-11
Math.floor(-11.82) //-12
Math.ceil(var1) //57
Math.ceil(20.52) //21
Math.ceil(-10.21) //-10
Math.ceil(-11.82) //-11

// liczby pseudolosowe z zadanego zakresu
const min = 3;
const max = 7;

const result =  Math.floor(Math.random() * (max-min+1) + min);

// przykład użycia Math.random do wygenerowania losowego koloru (zapis 16)
const color =  "#" + Math.random().toString(16).substr(2,6);

/*
Powyższe równanie możemy rozpisać na kroki:

1)
Math.random() - zwraca liczbę z przedziału 0-1
0.0264363764209139

2)
Number.toString(16) - zapisuje liczbę w danym systemie jako string
0.0264363764209139.toString(16) da nam "0.06c488cc270ee"

3)
"0.06c488cc270ee".subStr(2,6) - wycinamy litery od 3 do 7
czyli w wyniku uzyskamy "06c488"

4)
Dodajemy # i mamy kolor
"#" + "06c488" === "#06c488"
*/
