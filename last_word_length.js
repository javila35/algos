function lengthOfLastWord(s) {
  const words = s.split(" ");
  console.log(words);
  for (let i = words.length - 1; i > 0; i--) {
    if (words[i] !== "") return words[i].length;
  }
}

console.log("Hello World, 5", lengthOfLastWord("Hello World"));
console.log("moon, 4", lengthOfLastWord("   fly me   to   the moon  "));
console.log("luffy, 6", lengthOfLastWord("luffy is still joyboy"));
console.log("today, 3", lengthOfLastWord("Today is a nice day"));
