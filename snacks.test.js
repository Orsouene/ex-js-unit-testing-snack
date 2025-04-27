const {
  getInitials,
  createSlug,
  palindrome,
  findPostById,
} = require("./RefacFunctions");
//!!!!!!!!!!!!!!!!!!!!!!!Snack-1
test("funzione che restituisce le iniziali di un nome completo", () => {
  const initial = getInitials("orsouene    elaouizeb");
  expect(initial).toBe("O,E");
});
//!!!!!!!!!!!!!!!!!!!!!!!Snack-2
test("funzione createSlug restituisce una stringa in lowercase e sostituisce gli spazi con -", () => {
  const result = createSlug("Home Page 1");
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
//!!!!!!!!!!!!!!!!!!!!!!!!Snack-6
 test(
   "La funzione createSlug lancia un errore se il titolo è vuoto o non lido",()=>{
     expect(()=>createSlug("")).toThrow();


   }
 );
//!!!!!!!!!!!!!!!!!!!!!!!!Snack-7
const posts = [
  { id: 1, title: "post1", slug: "Questo è il post 1" },
  { id: 2, title: "post2", slug: "Questo è il post 2" },
  { id: 3, title: "post3", slug: "Questo è il post 3" },
];
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
expect(findPostById(posts,1)).toEqual({
  id: 1,
  title: "post1",
  slug: "Questo è il post 1",
});
expect(()=>findPostById(posts, "stringa")).toThrow("id non valido ")
expect(() => findPostById([50,60], 1)).toThrow("posts non valido ");
});