/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    let st = str.toLowerCase();
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let ch of st){
      if(vowel.includes(ch)){
        count+=1;
      }
    }
   return count
}

module.exports = countVowels;