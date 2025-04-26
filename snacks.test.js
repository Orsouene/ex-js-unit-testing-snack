const { getInitials, createSlug, palindrome } = require("./RefacFunctions");
//!!!!!!!!!!!!!!!!!!!!!!!Snack-1
test("funzione che restituisce le iniziali di un nome completo", () => {
  const initial = getInitials("orsouene    elaouizeb");
  expect(initial).toBe("O,E");
});
//!!!!!!!!!!!!!!!!!!!!!!!Snack-2
test("funzione createSlug restituisce una stringa in lowercase e sostituisce gli spazi con -", () => {
  const result = createSlug("HOME PAGE 1");
  expect(result).toBe("home-page-1");
});
//!!!!!!!!!!!!!!!!!!!!!!!Snack-3

const array = [5,5,5,5]
 const avrage=(arr)=>arr.reduce((acc,curr)=>acc+=curr,0)/arr.length

test("La funzione average calcola la media aritmetica di un array di numeri.",()=>{
  const result = avrage(array);
  expect(result).toBe(5)

});

//!!!!!!!!!!!!!!!!!!!!!!!Snack-4
test("funzione createSlug restituisce una stringa in lowercase e sostituisce gli spazi con -", () => {
  const result = createSlug("HOME PAGE 1");
  expect(result).toBe("home-page-1");
});


//!!!!!!!!!!!!!!!!!!!!!!!Snack-5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
 expect(palindrome("anna")).toBeTruthy();
  expect(palindrome("orsouene")).toBeFalsy();
 
});