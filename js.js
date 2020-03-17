/*
Write a function that takes a string of parentheses as input (ex. "(((()") and outputs a boolean value True if the brackets are "balanced" and False if they are not "balanced". For the purpose of this exercise, the left parentheses must always come before the right one, for example, an input of ")(" should return false, but an input of "()" should return true. 
*/


function randomize(length) {
	var char = ')(';
	var charLength = char.length;
	var charResult = '';
	for (var i = 0; i < length; i++) {
		charResult += char.charAt(Math.floor(Math.random() * charLength));
	}
	return charResult;
}
var charRow = randomize(5)
console.log(charRow)

if (charRow.indexOf(")(") > -1) {
	console.log('False - is not balanced');
} else {
	console.log('True - is balanced');
}