// Solução do desafio 3-a
const inactiveStudents = students.filter((student) => !student.active);

console.log("Desafio 3-a (Estudantes inativos):", inactiveStudents);

// Solução do desafio 3-b
const studentById = students.find((student) => student.id === 3);

console.log("Desafio 3-b (Estudante com id 3):", studentById);