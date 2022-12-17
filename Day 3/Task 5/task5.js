let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const string = (arr) => arr.every((i) => typeof i === "string");
console.log(string(fruits));

fruits.forEach((fruit) => {
    console.log(`Does ${fruit} start with "a"? ${fruit.startsWith("a")}`);
});

let result = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(result);
