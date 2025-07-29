// Solução do desafio 1-a
const person = { name: "Fernando", age: 42 };
const person2 = { name: "Anna", age: 31 };

const addIsAdultProperty = (personObject) => {
  return {
    ...personObject,
    isAdult: personObject.age >= 18,
  };
};

console.log("Desafio 1-a (Fernando):", addIsAdultProperty(person));

console.log("Desafio 1-a (Anna):", addIsAdultProperty(person2));