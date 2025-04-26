const { getInitials, createSlug } = require("./RefacFunctions");
//!!!!!!!!!!!!!!!!!!!!!!!Snack-1
test("funzione che restituisce le iniziali di un nome completo", () => {
  const initial = getInitials("orsouene    elaouizeb");
  expect(initial).toBe("O,E");
});
//!!!!!!!!!!!!!!!!!!!!!!!Snack-2
test("funzione createSlug restituisce una stringa in lowercase",()=>{
  const result = createSlug("HOME PAGE");
  expect(result).toBe("home page")
});
//!!!!!!!!!!!!!!!!!!!!!!!Snack-3

const array = [5,5,5,5]
 const avrage=(arr)=>arr.reduce((acc,curr)=>acc+=curr,0)/arr.length

test("La funzione average calcola la media aritmetica di un array di numeri.",()=>{
  const result = avrage(array);
  expect(result).toBe(5)

});