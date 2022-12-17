function* Fibonacci1(num) {
    let [a, b] = [0, 1];

    for (let i = 0; i < num; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let elementsNumber = prompt("How many Fibonacci series elements do you want displayed?");

var Fibonacci1 = Fibonacci1(parseInt(elementsNumber));
console.log(Fibonacci1);

for (const iterator of Fibonacci1) {
    console.log(iterator);
}

console.log("-----------------------------------------------------------");

function* Fibonacci2(maxFibonacci) {
    let [a, b] = [0, 1];

    while (a <= maxFibonacci) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let maxFibonacci = prompt("What's the maximum number of Fibonacci series do you want displayed?");

var Fibonacci2 = Fibonacci2(parseInt(maxFibonacci));

for (const iterator of Fibonacci2) {
    console.log(iterator);
}
