
//!Snack-1
const getInitials = (nome) => {
  const [a, b] = nome.split(" ").filter(str=>str!=="");
  return a.charAt(0).toUpperCase() + "," + b.charAt(0).toUpperCase();
};
//!Snack-2
const createSlug = (slug) => {
  return slug.toLowerCase();
};

module.exports = { getInitials, createSlug };