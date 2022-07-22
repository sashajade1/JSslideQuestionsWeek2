// Write a function which takes a string and returns it written backwards.

function ReverseString(str) {
    return str.split('').reverse().join('')}
   console.log(ReverseString("Sasha Rudd"))

/*
- The split () method splits a string into an array of substrings.
 The split () method returns the new array. The split () method 
 does not change the original string. If (" ") is used as separator,
 the string is split between words.
 -The join () method returns an array as a string. 
*/


/*
-Declare an array that stores a shopping list.
-This array should have three categories (arrays) 
of the shipping items and each of these should 
have at least 3 items in them.
-Log the 3rd item of the 2nd list to the console.
*/
 let shoppingList = [
 ["Apples", "Oranges", "Strawberrys"],
 ["Chicken", "Beef", "Lamb"],
 ["Coffee", "Milk", "Sugar"]];
console.log(shoppingList[1][2]);