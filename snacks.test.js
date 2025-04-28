const {
  getInitials,
  createSlug,
  palindrome,
  findPostById,
  avrage,
  addPost,
  removePost,
} = require("./RefacFunctions");


 const array = [5,5,5,5]
 let posts;

beforeEach(()=>{
posts = [
  { id: 1, title: "post1", slug: "Questo è il post 1" },
  { id: 2, title: "post2", slug: "Questo è il post 2" },
  { id: 3, title: "post3", slug: "Questo è il post 3" },
];
})

//!"Describe per Test per la manipolazione degli array"
describe("Test per la manipolazione degli array",()=>{
  //?**********************************************?Snack-3
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const result = avrage(array);
    expect(result).toBe(5);
  });
  //?**********************************************?Snack-7
  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual({
      id: 1,
      title: "post1",
      slug: "Questo è il post 1",
    });
    expect(() => findPostById(posts, "ciao")).toThrow("id non valido");
    expect(() => findPostById([50, 60], 1)).toThrow("posts non valido");
  });

  //?************************************************?Bonus-8
  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    expect(
      addPost(posts, { id: 4, title: "post4", slug: "Questo è il post 4" })
    ).toHaveLength(4);
  });

  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    expect(removePost(posts, 3)).toHaveLength(2);
  });
  //?************************************************?Bonus-9
    test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
      expect(() =>
        addPost(posts, { id: 2, title: "post4", slug: "Questo è il post 2" })
      ).toThrow("id già esistente");
      expect(() =>
        addPost(posts, { id: 4, title: "post4", slug: "Questo è il post 2" })
      ).toThrow("slug già esistente");

    });
});

//!"Test per la genrazione delle slug"
describe("Test per la genrazione delle slug",()=>{
  //?**********************************************?Snack-2
  test("funzione createSlug restituisce una stringa in lowercase e sostituisce gli spazi con -", () => {
    const result = createSlug("Home Page 1");
    expect(result).toBe("home-page-1");
  });

  //?**********************************************?Snack-6
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non lido", () => {
    expect(() => createSlug("")).toThrow();
  });
  //?**********************************************?Snack-4
  test("funzione createSlug restituisce una stringa in lowercase e sostituisce gli spazi con -", () => {
    const result = createSlug("HOME PAGE 1");
    expect(result).toBe("home-page-1");
  });
});
//!"Test per la manipolazione dei stinghe"
describe("Test per la manipolazione dei stinghe",()=>{
  //?**********************************************?Snack-1
  test("funzione che restituisce le iniziali di un nome completo", () => {
    const initial = getInitials("orsouene    elaouizeb");
    expect(initial).toBe("O,E");
  });

  //?**********************************************?Snack-5
  test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(palindrome("anna")).toBeTruthy();
    expect(palindrome("orsouene")).toBeFalsy();
  });
});