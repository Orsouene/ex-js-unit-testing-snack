const getInitials = require("./RefacFunctions")
//!Snack-1
test("funzione che restituisce le iniziali di un nome completo", () => {
  const initial = getInitials("orsouene    elaouizeb");
  expect(initial).toBe("O,E");
});
