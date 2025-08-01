const products = [
  { name: "Camiseta", category: "Roupas", price: 29.99 },
  { name: "Celular", category: "Eletrônicos", price: 999.99 },
  { name: "Livro", category: "Livros", price: 49.99 }
];

// Solução do desafio 2-a
const productStrings = products.map((product) => {
  return `${product.name} - ${product.category}`;
});

console.log("Desafio 2-a:", productStrings);