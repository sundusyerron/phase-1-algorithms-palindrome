function isPalindrome(word) {

}
  function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")

  return reversedWord
}

function isPalindrome(word) {

}
  // Write your algorithm here
const reversedWord = reverse(word)
if (word === reversedWord){
  return true
}
else{
  return false
}


/* 
  Add your pseudocode here
// have a function that returns true if the words is a palindrome and false if not
// that means if the word is the same as the word in reverse, should return 
// if the word is word is equal to reverse return true
// else return false
/*
*/

/*
  Add written explanation of your solution here
*/

 
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
