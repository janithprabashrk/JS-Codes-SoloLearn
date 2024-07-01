/*The <b>Date</b> object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
Using <b>new Date()</b>, create a new date object with the current date and time. */

var d = new Date(); //d stores the current date and time

//The other ways to initialize dates allow for the creation of new date objects from the specified date and time.

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//The following example creates a new date object with a specified date and time:

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000);

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);


// Create a Date object
let now = new Date();
console.log("Current Date and Time:", now);

// Get various components of the date
let year = now.getFullYear();
console.log("Year:", year);

let month = now.getMonth();
console.log("Month (0-11):", month);

let day = now.getDate();
console.log("Day of the Month:", day);

let weekday = now.getDay();
console.log("Day of the Week (0-6):", weekday);

let hours = now.getHours();
console.log("Hours (0-23):", hours);

let minutes = now.getMinutes();
console.log("Minutes (0-59):", minutes);

let seconds = now.getSeconds();
console.log("Seconds (0-59):", seconds);

let milliseconds = now.getMilliseconds();
console.log("Milliseconds (0-999):", milliseconds);

let time = now.getTime();
console.log("Milliseconds since January 1, 1970:", time);

// Set various components of the date
now.setFullYear(2025);
console.log("Updated Year:", now);

now.setMonth(11); // December (0-indexed)
console.log("Updated Month:", now);

now.setDate(25);
console.log("Updated Day of the Month:", now);

now.setHours(10);
console.log("Updated Hours:", now);

now.setMinutes(30);
console.log("Updated Minutes:", now);

now.setSeconds(45);
console.log("Updated Seconds:", now);

now.setMilliseconds(500);
console.log("Updated Milliseconds:", now);

// Convert to different string formats
let isoString = now.toISOString();
console.log("ISO String:", isoString);

let dateString = now.toDateString();
console.log("Date String:", dateString);

let timeString = now.toTimeString();
console.log("Time String:", timeString);

