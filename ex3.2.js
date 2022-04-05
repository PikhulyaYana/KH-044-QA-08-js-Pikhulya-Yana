/* Write a program that takes a year from user and print 
whether that year is a leap year or not.*/

let year = prompt('Введите год');
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("Високосный год");
} else {
    console.log("Невисокосный год");
}


