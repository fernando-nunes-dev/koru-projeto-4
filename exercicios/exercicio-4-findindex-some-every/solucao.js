const tasks = [
  { id: 1, description: "Estudar JavaScript", completed: false },
  { id: 2, description: "Fazer exercícios", completed: true },
  { id: 3, description: "Ler um livro", completed: false }
];

// Solução do desafio 4-a
const firstIncompleteTaskIndex = tasks.findIndex((task) => !task.completed);

console.log("Desafio 4-a (Índice da 1ª tarefa incompleta):", firstIncompleteTaskIndex);