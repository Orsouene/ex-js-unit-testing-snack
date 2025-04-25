const getInitials = (nome) => {
  const [a, b] = nome.split(" ").filter(str=>str!=="");
  return a.charAt(0).toUpperCase() + "," + b.charAt(0).toUpperCase();
};

module.exports=getInitials