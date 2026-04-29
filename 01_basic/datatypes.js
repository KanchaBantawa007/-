/*alert("Welcome to my website!") 
it is used to show a pop-up message to the user when they visit the website. In this case, it will display "Welcome to my website!" in an alert box.
but here we wre using a node js environment so we can't use alert function. instead of that we can use console.log() to print the message in the console.*/
// ============================================
//        JavaScript Data Types - Full Guide
// ============================================

// ─────────────────────────────────────────
// 1. STRING
// ─────────────────────────────────────────
let firstName = "Kanchan";
let lastName = 'Bantawa';
let fullName = `Full Name: ${firstName} ${lastName}`; // Template literal

console.log("=== STRING ===");
console.log(fullName);
console.log("Length:", firstName.length);
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", firstName.toLowerCase());
console.log("Includes 'an':", firstName.includes("an"));
console.log("Replace:", firstName.replace("Kanchan", "Hero")); // Replaces first occurrence
console.log("Slice:", firstName.slice(0, 3));// Extracts "Kan"

// ─────────────────────────────────────────
// 2. NUMBER
// ─────────────────────────────────────────
let int = 42;
let float = 3.14;
let negative = -100;
let infinity = Infinity;
let notANumber = NaN;

console.log("\n=== NUMBER ===");
console.log("Integer:", int);
console.log("Float:", float);
console.log("Negative:", negative);
console.log("Infinity:", infinity);
console.log("NaN:", notANumber);
console.log("Is NaN?", isNaN(notANumber));// test if a value is NaN
console.log("Max Safe Int:", Number.MAX_SAFE_INTEGER);// it O/p max safe integer in JavaScript
console.log("toFixed:", float.toFixed(1));//it round off the number to specific value
console.log("parseInt:", parseInt("42px"));// it parses a string and returns an integer. It stops parsing when it encounters a non-numeric character, so "42px" becomes 42.
console.log("parseFloat:", parseFloat("3.14abc"));// it parses a string and returns a floating-point number. Similar to parseInt, it stops parsing at the first non-numeric character, so "3.14abc" becomes 3.14.

// ─────────────────────────────────────────
// 3. BOOLEAN
// ─────────────────────────────────────────
let isLoggedIn = true;
let hasAccess = false;

console.log("\n=== BOOLEAN ===");
console.log("isLoggedIn:", isLoggedIn);
console.log("hasAccess:", hasAccess);
console.log("AND:", isLoggedIn && hasAccess);// it binary and and give O/P if both are true
console.log("OR:", isLoggedIn || hasAccess);// it binary or and give O/P if any one is true
console.log("NOT:", !isLoggedIn);// it binary not and give O/P if the value is false
console.log("Truthy check (1):", Boolean(1));// it convert the value to boolean and give O/P if the value is true
console.log("Falsy check (0):", Boolean(0));// it convert the value to boolean and give O/P if the value is false
console.log("Falsy check (''):", Boolean(""));// it convert the value to boolean and give O/P if the value is false
console.log("Truthy check ('hi'):", Boolean("hi"));// it convert the value to boolean and give O/P if the value is true

// ─────────────────────────────────────────
// 4. UNDEFINED
// ─────────────────────────────────────────
let notDefined;
let explicitUndefined = undefined;

console.log("\n=== UNDEFINED ===");
console.log("notDefined:", notDefined);
console.log("type:", typeof notDefined);
console.log("Is undefined?", notDefined === undefined);// it check if the value is undefined or not

// ─────────────────────────────────────────
// 5. NULL
// ─────────────────────────────────────────
let emptyValue = null;

console.log("\n=== NULL ===");
console.log("null value:", emptyValue);
console.log("typeof null (JS quirk):", typeof emptyValue); // 'object' - JS bug
console.log("Is null?", emptyValue === null);
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// ─────────────────────────────────────────
// 6. BIGINT
// ─────────────────────────────────────────
let bigInt = 9007199254740991n;
let anotherBig = BigInt("12345678901234567890");

console.log("\n=== BIGINT ===");
console.log("BigInt:", bigInt);
console.log("Add:", bigInt + 1n);
console.log("Multiply:", bigInt * 2n);
console.log("typeof:", typeof bigInt);

// ─────────────────────────────────────────
// 7. SYMBOL
// ─────────────────────────────────────────
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("\n=== SYMBOL ===");
console.log("sym1:", sym1.toString());
console.log("sym2:", sym2.toString());
console.log("Are equal?", sym1 === sym2); // false - always unique
console.log("Description:", sym1.description);

// Symbol as object key
let user = {};
user[sym1] = "admin";
console.log("Symbol key value:", user[sym1]);

// ─────────────────────────────────────────
// 8. OBJECT
// ─────────────────────────────────────────
let person = {
  name: "Kancha",
  age: 22,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  },
  greet() {
    return `Hi, I am ${this.name}`;
  }
};

console.log("\n=== OBJECT ===");
console.log("Object:", person);
console.log("Name:", person.name);
console.log("Nested:", person.address.city);
console.log("Method:", person.greet());
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Has key?", "age" in person);

// Object destructuring
let { name, age } = person;
console.log("Destructured:", name, age);

// Spread
let updatedPerson = { ...person, age: 25 };
console.log("Spread updated age:", updatedPerson.age);

// ─────────────────────────────────────────
// 9. ARRAY
// ─────────────────────────────────────────
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log("\n=== ARRAY ===");
console.log("Fruits:", fruits);
console.log("Length:", fruits.length);
console.log("Access:", fruits[0]);
console.log("Push:", fruits.push("grape"), fruits);
console.log("Pop:", fruits.pop(), fruits);
console.log("Map:", numbers.map(n => n * 2));
console.log("Filter:", numbers.filter(n => n > 2));
console.log("Reduce:", numbers.reduce((acc, n) => acc + n, 0));
console.log("Find:", numbers.find(n => n === 3));
console.log("Includes:", fruits.includes("mango"));
console.log("Join:", fruits.join(" - "));
console.log("Slice:", fruits.slice(0, 2));
console.log("Spread:", [...fruits, "kiwi"]);

// Array destructuring
let [first, second] = fruits;
console.log("Destructured:", first, second);

// ─────────────────────────────────────────
// 10. FUNCTION
// ─────────────────────────────────────────
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Default params
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Rest params
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

// Higher order function
function operate(a, b, fn) {
  return fn(a, b);
}

console.log("\n=== FUNCTION ===");
console.log("add:", add(5, 3));
console.log("multiply:", multiply(4, 3));
console.log("greet default:", greet());
console.log("greet custom:", greet("Kancha"));
console.log("rest sum:", sum(1, 2, 3, 4, 5));
console.log("higher order:", operate(10, 5, add));

// ─────────────────────────────────────────
// 11. TYPE CONVERSION
// ─────────────────────────────────────────
console.log("\n=== TYPE CONVERSION ===");
console.log("String to Number:", Number("42"));
console.log("Number to String:", String(42));
console.log("Boolean to Number:", Number(true));
console.log("String to Boolean:", Boolean("hello"));
console.log("Implicit + string:", "5" + 5);   // "55"
console.log("Implicit - string:", "5" - 5);   // 0
console.log("Explicit parseInt:", parseInt("10.9"));

// ─────────────────────────────────────────
// 12. typeof CHECK
// ─────────────────────────────────────────
console.log("\n=== typeof ===");
console.log(typeof "hello");       // string
console.log(typeof 42);            // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object (JS quirk)
console.log(typeof Symbol());      // symbol
console.log(typeof 123n);          // bigint
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof function(){}); // function