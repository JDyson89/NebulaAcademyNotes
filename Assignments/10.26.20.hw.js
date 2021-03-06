// Read eloquent JavaScript Chapter 3

// Problem #1
// Create a function called sumNum that takes in two parameters: num1 and num2.
// This function will return the sum of num1 and num2
// function sumNum(num1, num2){
//     return num1 + num2
// }
// console.log(sumNum(10, 12));


// Problem #2
// Create a function called divisionRemainder that takes In two parameters: num1 and num2.
// This function will divide num1 and num2 (num1/num2). Assign the number of num1/num2 to a variable
// Calculate the remainder and assign it to a variable
// This function will return the string: "(num1) divided by (num2) is (number) with a remainder of (remainder)"

// function divisionRemainder(num1, num2){
//     let answer = num1/num2
//     console.log(answer)
//     return `${num1} divided by ${num2} is ${Math.floor(answer)} with a remainder of ${num1 % num2}`
// }
// console.log(divisionRemainder(30, 4)) //7.5


// Problem #3
// Create a function called randomNums that returns a random number from 0 to 1000
// function randomNums(number){
//     return (Math.random() * 1000)
// }
// console.log(randomNums(233)); // 281.9683305231924

// //or

// function randomNums(num){
//     return (Math.random() * num)
// }
// console.log(randomNums(1000));

// Problem #4
// Create a function called theType that takes in one parameter called: dataType
// This function will return the type of any argument passed into this function
// function theType(dataType){
//     return typeof dataType
// }
// console.log(theType('Jasmine'));
// console.log(theType(10))
// console.log(theType(true))

// Problem #5
// Create a function called isItArray that takes in one parameter called: arrayChecker
// This function returns whether the argument passed into this function is an array or not (the function should evaluate to either true or false)
// function isItArray(arrayChecker){
//         return Array.isArray(arrayChecker)
// }           
// console.log(isItArray(8));
// console.log(isItArray([4, 8, 12]));
// console.log(isItArray('string'))

// Problem #6
// Create a function called fifthIndex that takes in a string as a parameter
// This function finds the 5th index of any string passed into this function
// function fifthIndex(Jasmine){
//     return Jasmine[5]

// }
// console.log(fifthIndex('Jasmine'));


// Problem #7
// Create a function called myInitials that takes in two parameters: firstName and lastName
// This function returns the initials of the first and last name
// function myInitials(firstName, lastName){
//     return firstName[0] + lastName[0]
// }
// console.log(myInitials('Jasmine', 'Dyson'))



// Problem #8
// Create a function called upperCase that takes in a string as a parameter
// This function returns any strings passed into the function in all uppercase letters
// function upperCase(neighbor){
//     return neighbor.toUpperCase()
// }
// console.log(upperCase('hello there'));


// Problem #9
// Create a function called lastChar that takes in a string as a parameter
// This function returns the last character of any string passed into this function
// .length method ONLY for getting the last character
// function lastChar(lobby){
//         return lobby[lobby.length - 1]
// }
// console.log(lastChar('Jasmine'));


// Problem #10

// Using this array: let counties = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']

// Create a function called lastElement that takes in an array as a parameter
// Find the last element in the array and assign it to a variable
// This function returns the string: 'the last element in the array is (country)'

// let countries = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']

// function lastElement(countries){
//     let lastCountry = countries[countries.length -1]
// //     console.log(lastCountry)
//     return `the last element in the array is ${lastCountry}`
// }
// console.log(lastElement(countries))




// Create a function called: favoriteCountry that takes in an array as a parameter
// Add your favorite country at the beginning of the array
// This function returns the string: 'My favorite country is (country)'
let countries = ['Puerto Rico','Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']

function favoriteCountry(favCountry){
   favCountry.unshift('Puerto Rico')    
    return `My favorite country is ${countries[0]}`
}
console.log(favoriteCountry(countries));