// Nama: Zanetta Aisha Dharmawan
// Sumber: https://www.freecodecamp.org/news/javascript-replace-how-to-replace-a-string-or-substring-in-js/#:~:text=In%20JavaScript%2C%20you%20can%20use,regular%20expression%20to%20be%20replaced.

function changeWord(selectedText, changedText, text) {
  try {
    let newString = text.replace(selectedText, changedText);
    console.log("SEBELUM BERUBAH: ", text);
    let result = "SETELAH BERUBAH: " + newString + "\n";
    return result;
  } catch (error) {
    return "Error: " + error.message;
  }
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));