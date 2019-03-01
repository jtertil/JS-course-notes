// podstawy
function sum(a, b) {
    console.log(a + b);
}
sum(2, 3); // 5

function writeText(name) {
  if (name === undefined) {
    console.log("Każda dziewczyna chce mieć kota");
  } else {
    console.log(name + " ma kota");
  }
}
writeText(); // Każda dziewczyna chce mieć kota
writeText("Ala"); // Ala ma kota
writeText("Marysia"); // Marysia ma kota

function writeText2(name, age) {
    console.log(name + " ma kota, który ma " + age + "lat");
}
writeText2("Ala", 5); // Ala ma kota, który ma 5 lat
writeText2("Marysia"); // Marysia ma kota, który ma undefined lat
writeText2(); // undefined ma kota, który ma undefined lat

// korzystamy z funkcji random() i floor() by wypisać liczbę spomiędzy 1-10
function randomBetween(min, max) {
    console.log(  Math.floor(Math.random() * (max-min+1) + min)  );
}
randomBetween(1, 10);

// funkcja w funkcji - no problem
function fixName(name) {
    console.log(writeText(name.charAt(0).toUpperCase() + name.substr(1)));
}

// arguments (w ES6 posiada alternatywe w postaci rest parameter)
function sum() {
    console.log(arguments);
}
sum(); // [] (zobacz dokładniej co wyszło w konsoli, bo wynik nie jest dokładnie taki)
sum(1,2,3,4); // [1,2,3,4]
sum("ala", "ma", "kota"); // ["ala", "ma", "kota"]

function superSum() {
  if (arguments.length < 2) {
    console.warn("Błąd: Musisz podać minimum 2 liczby");
  } else {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    } console.log(result);
  }
}
superSum(5); //  Błąd: Musisz podać minimum 2 liczby
superSum(1, 2, 3, 4); // 10

function czyJestArg1(txt) {
  console.log(txt);
}

function czyJestArg2(txt) {
  if (typeof txt === "undefined") {
      txt = "nie ma";
  } console.log(txt);
}

function czyJestArg3(txt) {
  txt = (typeof txt === "undefined")? "nie ma" : txt;
  console.log(txt);
}

function czyJestArg4(txt) {
  txt = txt || "nie ma";
  console.log(txt);
}

czyJestArg1() // undefined
czyJestArg1("") // ""
czyJestArg1("jest") // jest
czyJestArg2() // nie ma
czyJestArg2("") // ""
czyJestArg2("jest") // jest
czyJestArg3() // nie ma
czyJestArg3("") // ""
czyJestArg3("jest") // jest
czyJestArg4() // nie ma
czyJestArg4("") // nie ma - a przecież JEST!
czyJestArg4("jest") // jest

// return
function calc(num1, num2) {
  const result = num1 + num2;
  return result
  // return przerywa działanie funckcji, jeśli za nim jest jakaś instrukcja nie wykona się
}
console.log(calc(4, 5)); // 9

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false
  }
}
const num = 5
if (isEven(num)) {
  console.log('Liczba '+ num + 'jest parzysta');
} else {
  console.log('Liczba '+ num + 'jest nie parzysta');
}

// return może zwracać dowolną wartość, np tablicę czy obiekt
function makeArr123() {
  return [1, 2, 3]
}
const arr = makeArr123()
console.log(arr[0] + "|" + arr[1] + "|" + arr[2]); // 1|2|3

function makeObj() {
  return {
    name: "Ala",
    age: 19,
    pet: "kot"
  }
}
const obj = makeObj();
console.log("To jest " + obj.name + ", ma " + obj.age + " lat. A to jej " + obj.pet);

// funkcje anonimowe - nie musimy deklarować funkcji. Możemy uzyć jej jako wyrażenia przypisanego danej zmiennej. Wowczas funkcja nie potrzebuje nazwy.
