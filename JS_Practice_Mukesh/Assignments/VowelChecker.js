function containsVowel(inputString) {

  let str = inputString.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of vowels) {
    if (str.includes(char)) {
      return "Vowel Found";
    }
  }
  return "No Vowel";
}


console.log(containsVowel("Mukesh"));      
console.log(containsVowel("Rhythm"));       
console.log(containsVowel("AUTOMATION"));  

