let singleQuoteString = 'Single Quote String'
let doubleQuoteString = "Double Quote String"
let templateLiteralString = 'Template Literal string'

console.log("singleQuoteString-", singleQuoteString);
console.log("doubleQuoteString-", doubleQuoteString);
console.log("templateLiteralString-", templateLiteralString);

let myStringObj = new String("Hello, javascript");
console.log("myStringObj-", myStringObj);

let firstChar = myStringObj[0]
let lastChar = myStringObj[myStringObj.length - 1]

console.log("first char-", firstChar);
console.log("last char-", lastChar);

console.log("Char at 7:", myStringObj.charAt(7));
console.log("Char at 7:", myStringObj.charCodeAt(7));
console.log("concat another string :-", myStringObj.concat(", I want to understand you."))







