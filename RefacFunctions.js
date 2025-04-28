
//!Snack-1
const getInitials = (nome) => {
  const [a, b] = nome.split(" ").filter(str=>str!=="");
  return a.charAt(0).toUpperCase() + "," + b.charAt(0).toUpperCase();
};
//!Snack-2
const createSlug = (slug) => {
  if (!slug) throw new Error("slug non valido");
  return slug.toLowerCase().replaceAll(" ", "-");
};
//!Snack-4

const avrage = (arr) =>
  arr.reduce((acc, curr) => (acc += curr), 0) / arr.length;
//!Snack-5

const palindrome = (text) => {
  const inversa = text === text.split("").reverse().join("");
  return text=inversa;
};
//!Snack-7

const findPostById = (posts,id) => {
  if(isNaN(id)){ throw new Error("id non valido")}

    posts.forEach(element =>  {    if (  element.id === undefined ||
    element.title === undefined ||
    element.slug === undefined) {
      throw new Error("posts non valido ")
    }
  })
    
 return  posts.find((myPost) => myPost.id === id);



};

module.exports = { getInitials, createSlug, palindrome, findPostById, avrage };