
//!Snack-1
const getInitials = (nome) => {
  const [a, b] = nome.split(" ").filter(str=>str!=="");
  return a.charAt(0).toUpperCase() + "," + b.charAt(0).toUpperCase();
};
//!Snack-2
const createSlug = (slug) => {
   const retSlug = slug.toLowerCase().replaceAll(" ","-")

   return retSlug
   
};
//!Snack-4
const palindrome = (text) => {
  const inversa = text === text.split("").reverse().join("");
  return inversa;
};

module.exports = { getInitials, createSlug, palindrome };