const students = [
{ id: 1, name: "Lucas", age: 22, grades: [88, 76, 91], active: true },
  { id: 2, name: "Juliana", age: 20, grades: [95, 89, 93], active: true },
  { id: 3, name: "Rafael", age: 19, grades: [65, 72, 70], active: false },
  { id: 4, name: "Camila", age: 21, grades: [78, 85, 80], active: true },
  { id: 5, name: "Fernando", age: 23, grades: [92, 94, 90], active: false },
];

// Solução do desafio 3-a
const inactiveStudents = students.filter((student) => !student.active);

console.log("Desafio 3-a (Estudantes inativos):", inactiveStudents);

// Solução do desafio 3-b
const studentById = students.find((student) => student.id === 3);

console.log("Desafio 3-b (Estudante com id 3):", studentById);

// Solução do desafio 3-c
const studentsWithLowGrade = students.filter((student) => {
  return student.grades.some((grade) => grade < 70);
});

console.log("Desafio 3-c (Alunos com nota < 70):", studentsWithLowGrade);

// Solução do desafio 3-d
const highAchieversNames = students
  .filter((student) => {
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return average > 85;
  })
  .map((student) => student.name); 

console.log("Desafio 3-d (Nomes dos alunos com média > 85):", highAchieversNames);