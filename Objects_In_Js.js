// JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.
var person = {
    name: "John", // properties
    age: 31, 
    favColor: "green", 
    height: 183
};

// You can access object properties in two ways.
var x = person.name; // Using dot notation
var y = person['favColor']; // Using bracket notation

document.write(x); // Outputs "John"
document.write(y); // Outputs "green"

// JavaScript's built-in length property is used to count the number of characters in a string.
var nameLength = person.name.length; // Counts the number of characters in the name property
document.write(nameLength); // Outputs 4, because "John" has 4 characters
