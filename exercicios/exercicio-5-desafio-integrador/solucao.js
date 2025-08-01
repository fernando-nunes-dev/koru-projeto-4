const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// a. Mostrar uma lista formatada de todos os produtos usando forEach
console.log("a. Lista de Produtos no Inventário:");
inventory.forEach(product => {
    console.log(`- ${product.name} (R$ ${product.price}) | Estoque: ${product.stock}`);
});

// b. Filtrar produtos que estão em estoque (stock > 0)
const inStockProducts = inventory.filter(product => product.stock > 0);
console.log("\nb. Produtos em estoque:", inStockProducts);

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const cheapElectronics = inventory.filter(
    product => product.category === "Eletrônicos" && product.price < 1000
);
console.log("\nc. Eletrônicos com preço < 1000:", cheapElectronics);

// d. Verificar se há algum produto sem estoque
const anyOutOfStock = inventory.some(product => product.stock === 0);
console.log("\nd. Existe algum produto sem estoque?", anyOutOfStock);

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const allHaveReviews = inventory.every(product => product.reviews.length > 0);
console.log("\ne. Todos os produtos têm avaliações?", allHaveReviews);

// f. Encontrar o índice do produto "Cafeteira"
const coffeeMakerIndex = inventory.findIndex(product => product.name === "Cafeteira");
console.log("\nf. Índice do produto 'Cafeteira':", coffeeMakerIndex);

// g. Encontrar o primeiro produto da categoria "Vestuário"
const firstApparel = inventory.find(product => product.category === "Vestuário");
console.log("\ng. Primeiro produto de Vestuário:", firstApparel);

// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
const searchProducts = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    return inventory.filter(product => 
        product.name.toLowerCase().includes(lowerCaseTerm)
    );
};
console.log("\nh. Buscando por 'phone':", searchProducts("phone"));

// i. Calcular a média de avaliações e adicionar como "averageRating"
const inventoryWithAvgRating = inventory.map(product => {
    const sumOfReviews = product.reviews.reduce((acc, review) => acc + review, 0);
    const averageRating = product.reviews.length > 0 ? sumOfReviews / product.reviews.length : 0;
    
    return {
        ...product,
        averageRating: parseFloat(averageRating.toFixed(2))
    };
});
console.log("\ni. Inventário com média de avaliações:", inventoryWithAvgRating);

// j. Encontrar o produto com a maior média de avaliações
const productWithHighestRating = inventoryWithAvgRating.reduce((bestProduct, currentProduct) => {
    if (currentProduct.averageRating > bestProduct.averageRating) {
        return currentProduct;
    }
    return bestProduct;
});
console.log("\nj. Produto com a maior média de avaliação:", productWithHighestRating);