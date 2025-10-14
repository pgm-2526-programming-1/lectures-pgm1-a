function sayHello() {
  console.log("Hallo");
}

sayHello();
sayHello();
sayHello();

// uitvoerende (resultaat = undefined)
function calculateSum(x = 5, y = 1) {
  console.log(`De som is ${x + y}`);
}

calculateSum(10, 20);
calculateSum(35, 60);
calculateSum();

// return functie
function getCalculatedSum(x = 5, y = 1) {
  return x + y;
}
console.log("De som is " + getCalculatedSum(10, 20));
console.log("De som is " + getCalculatedSum(35, 60));
console.log("De som is " + getCalculatedSum());

// arrow functies -> herbekijk les uit week 3
