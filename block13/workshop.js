// Is Truthy
// declare a variable input
// if input is false
// print the boolean value false is falsy
// else if input is null
// print the null value is falsy
// else if input is undefined
// print undefined is falsy
// else if the input is 0
// print "The number 0 is falsy (the only falsy number)"
// else if the input is ""
// print "The empty string is falsy (the only falsy string)"
// else print true

let input = "I am a string";

if (input === false) {
    console.log("The boolean value false is falsy");
} else if (input === null) {
    console.log("The null value is falsy");
} else if (input === undefined) {
    console.log("undefined is falsy");
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)");
} else {
    console.log(true);
}