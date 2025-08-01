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

// Solução do desafio 1-b
const fruits = ["maçã", "banana"];
const moreFruits = ["laranja", "uva"];
const evenMoreFruits = ["kiwi", "abacaxi"];

const combineArrays = (...arrays) => {
  return [].concat(...arrays);
};

const combined = combineArrays(fruits, moreFruits, evenMoreFruits);
console.log("Desafio 1-b:", combined);