const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  console.log(calculator.add(3,5)); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
  
// Encapsulation using factory functions
function createSecureBook(title, author) {
let _privateNote = "Secret note";

return {
    title,
    author,
    revealNote() {
    return _privateNote;
    },
    editNote(newNote) {
    _privateNote = newNote;
    }
};
}

const secretBook = createSecureBook("1984", "George Orwell");
console.log(secretBook.revealNote());  // Secret note
secretBook.editNote("Rewritten note");
console.log(secretBook.revealNote());  // Rewritten note