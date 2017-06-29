function countLetters(word) {
  var letterCounts = {};
  var newWord = word.split("").join("");
  for (var i = 0; i < newWord.length; i++) {
    if (newWord[i] != ' ') {
      if(letterCounts.hasOwnProperty(newWord[i])){
        letterCounts[newWord[i]].push(i);
      }
      else{
        letterCounts[newWord[i]] = [i];
      }
    }
  }
  console.log(letterCounts);
}

console.log(countLetters("lighthouse in the house"));