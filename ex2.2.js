/*Write a program which take string from console and print out whether 
it contains numbers, uppercase symbols, lowercase symbols, special 
characters (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question("Print your sentence", (str) => {
  
function count(str) {
        let upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (let i = 0; i < str.length; i++)
        {
          if (str[i] >= "A" && str[i] <= "Z") upper++;
          else if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
        }
        console.log("Upper case letters: " + upper + ".");
        console.log("Lower case letters: " + lower + ".");
        console.log("Numbers: " + number + ".");
        console.log("Special characters: " + special + ".");
      }
      count(str);
  readline.close()
})