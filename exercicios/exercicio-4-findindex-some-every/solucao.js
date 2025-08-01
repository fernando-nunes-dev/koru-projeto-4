const tasks = [
  { id: 1, description: "Estudar JavaScript", completed: false },
  { id: 2, description: "Fazer exercícios", completed: true },
  { id: 3, description: "Ler um livro", completed: false }
];

// Solução do desafio 4-a
const firstIncompleteTaskIndex = tasks.findIndex((task) => !task.completed);

console.log("Desafio 4-a (Índice da 1ª tarefa incompleta):", firstIncompleteTaskIndex);

// Solução do desafio 4-b
const hasCompletedLowPriority = tasks.some(
  (task) => task.priority === "baixa" && task.completed
);

console.log("Desafio 4-b (Existe tarefa completa de baixa prioridade?):", hasCompletedLowPriority);

// Solução do desafio 4-c
const highPriorityTasks = tasks.filter((task) => task.priority === "alta");
const allHighPriorityAreIncomplete = highPriorityTasks.every((task) => !task.completed);

console.log("Desafio 4-c (Todas as tarefas de alta prioridade estão incompletas?):", allHighPriorityAreIncomplete);

// Solução do desafio 4-d
const nonExistentTaskIndex = tasks.findIndex((task) => task.id === 10);

if (nonExistentTaskIndex === -1) {
  console.log("Desafio 4-d: Tarefa com id 10 não encontrada.");
} else {
  console.log("Desafio 4-d: Tarefa encontrada no índice:", nonExistentTaskIndex);
}