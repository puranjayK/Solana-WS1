const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function isPalindrome(s) {
  const len = s.length;
  for (var i = 0; i < len / 2; i++) {
    if (s[i] != s[len - 1 - i]) return false;
    return true;
  }
}
rl.question("Enter string ", (s) => {
  console.log(isPalindrome(s));
  rl.close();
});
