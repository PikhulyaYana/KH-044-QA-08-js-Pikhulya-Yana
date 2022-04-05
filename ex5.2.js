/* Write the program which take name of color from user 
(red, blue, green, yellow, orange, black, white, pink) 
and print out length of this word. Use switch*/


    let arg = prompt("Enter a color");
switch (arg) {
case 'red':
    alert( 'The lenth of this word is 3 letters' );
    break;

case 'blue':
case 'pink':
    alert( 'The lenth of this word is 4 letters' );
    break;

case 'green':
case 'black':
case 'white':
    alert( 'The lenth of this word is 5 letters' );
    break;
  
case 'yellow':
case 'orange':
    alert( 'The lenth of this word is 6 letters' );
    break;
}