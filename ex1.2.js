/* Write a program which take four numbers from the user and print out 
just that few of them which divide by 3 or 5 without remainder.*/


let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');
let num3 = prompt('Enter the third number');
let num4 = prompt('Enter the forth number');
let numbers = [num1, num2, num3, num4];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0 || numbers[i] % 5 == 0){
        console.log(numbers[i]);
        }
    }