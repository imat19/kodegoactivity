
// 1. Write a simple JavaScript function to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

function  myKulay(){
  let myColor = ["Red", "Green", "White", "Black"];
 
console.log('"' + myColor.join('+') + '"');
console.log('"' + myColor.join(',') + '"');
}
myKulay()


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function combineText(text) {
  let  x = text.split("");
return x.sort().join("");
  }
console.log(combineText("raymart"));

/*3.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string into the upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '*/

function fistUpCase(text)
{
  let ar = text.split(' ');
  let newar = [];
    
  for(let x = 0; x < ar.length; x++){
      newar.push(ar[x].charAt(0).toUpperCase()+ar[x].slice(1));
  }
  return newar.join(' ');
}
console.log(fistUpCase("the quick brown fox"));


// 4 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondHighLow(arn)
{
  arn.sort(function(x,y) {        
           return x-y;         
          });
  let nu = [arn[0]];
  let result = [];
  
  for(let j=1; j < arn.length; j++)
  {
    if(arn[j-1] !== arn[j])
    {
      nu.push(arn[j]);
    }
  }
    result.push(nu[1],nu[nu.length-2]);
  return result.join(',');
  }

console.log(secondHighLow([1,11,23,4,10]));

// 5 Write a JayaScript function to find the first not repeated character.
    
function nReap (str) {
  let resultChar = '';
  
  for (let x = 0; x < str.length; x++) {
       let indexOfChar = [];
  for (let y = 0; y < str.length; y++ ) {
      
       if (str.charAt(x) == str.charAt(y)) {
       indexOfChar.push(y);
       }
  
  }
      if (indexOfChar.length == 1) {
      resultChar = str.charAt(indexOfChar[0]);
       }
   }
   return resultChar;
      }
   console.log(nReap('abacddbec'));

   //6 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

  function findingSameLetter(sameLetter, letter) {
    let result = 0;
    for(let x = 0; x < sameLetter.length; x++) {
        if(sameLetter[x] === letter) {
    result++;
    }
  }
  return result
  }
  console.log(findingSameLetter('muchas gracias', 'a'));


/* 7. Write a JavaScript function to remove vowel characters from a string.
Example string : "manila bay"
Expected Output : "mnl by" */

function removeAeiou(s){
  let result ="";
  for (let x = 0 ; x < s.length; x ++){
      if (s[x] === "a" || s[x] ==="e" || s[x] ==="i" || s[x] ==="o" || s[x] ==="u"){
          continue;
      }
      result +=s[x];
  }
  return result;
}
console.log (removeAeiou("asd asddasd"))

8. Write a JavaScript function to compute the least common multiple (GCD) of two positive integers.

//9 Write a JavaScript function to merge two arrays and removes all duplicate elements.

let arr1 = [1, 2,3];
let arr2 = [2, 30, 1];
let last = [];
let array3 = arr1.concat(arr2);
let length = array3.length;
while (length--) 
{
  let item = array3[length];
  if (last.indexOf(item) === -1) 
  {
    last.unshift(item);
  }
}
console.log(last);


//10  Write a JavaScript function that returns a random element from a passed array.

const fu = (arr) => arr[(Math.floor((Math.random() * arr.length)))];

console.log(func(['Hi', 'there', 'raymart', 'wow']))


//11 Write a JavaScript function to check if an array contains a specific element. 

function checkTrueFalse(array, num){
  return array.includes(num)
  }
  console.log(checkTrueFalse([2, 5, 9, 6], 5))

//12 Write a JavaScript function to concatenate a given string n times (default is 1).

function repeat(str, text = 1){
  return str.repeat(text)
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));



 