// REDUCE
// 1. Given an array [1,2,3,4,5], calculate total sum using array reduce

const array = [1, 2, 3, 4, 5];

const total = array.reduce((total, item) => (total = total + item), 0);
console.log("total", total);

// 3. Given an Array of Objects, make an array of only fruits

const fruits = [
  {
    item: 1,
    fruits: ["banana", "orange"],
  },
  {
    item: 2,
    fruits: ["papaya", "pineapple"],
  },
  {
    item: 3,
    fruits: ["apple"],
  },
];
// Result ['apple', papaya', 'pineapple', 'banana', 'orange']
const onlyFruits = fruits.reduce((totalFruits, fruit) => {
  //   return fruit.fruits.concat(totalFruits);
  //   return (totalFruits = [...fruit.fruits, ...totalFruits]);
  return [...fruit.fruits, ...totalFruits];
}, []);

console.log("onlyFruits: ", onlyFruits);
// ["banana", "orange"],
//  ["papaya", "pineapple"],
//  ["apple"],

// build an array from each item...
let onlyItems = fruits.reduce((totalItems, item) => {
  return [item.item, ...totalItems];
}, []);

console.log("onlyItems", onlyItems);

onlyItems = fruits.map((item) => item.item);
console.log("onlyItems-map: ", onlyItems);

// 4 give an array of objects of pokemons, make an object with the following structure

const pokemon = [
  { name: "charmander", type: "fire", attack: 10 },
  { name: "squirtle", type: "water", attack: 100 },
  { name: "bulbasaur", type: "grass", attack: 20 },
];

// const pokemonModified = {
//   charmander: { type: "fire", attack: 10 },
//   squirtle: { type: "water", attack: 100 },
//   bulbasaur: { type: "grass", attack: 20 },
// };

// additional considerations: could have more properties apart from type and attack

const pokemonModified = pokemon.reduce((pokemonModified, item) => {
  const { name, ...rest } = item;
  //   return { [item.name]: { ...rest }, ...pokemonModified };
  return { [item.name]: rest, ...pokemonModified };
}, {});

console.log("pokemonModified", pokemonModified);

// sumar los ataques
const pokemonList = [
  { name: "charmander", firstAttack: 2, attack: 10 },
  { name: "squirtle", firstAttack: 2, attack: 7 },
  { name: "bulbasaur", firstAttack: 2, attack: 20 },
  { name: "charmander", firstAttack: 2, attack: 500 },
  { name: "squirtle", firstAttack: 2, attack: 100 },
  { name: "bulbasaur", firstAttack: 2, attack: 1 },
];

// second way
let pokemonListResult = pokemonList.reduce((sumUpPokemonAttacks, item) => {
  return {
    ...sumUpPokemonAttacks,
    [item.name]: [
      sumUpPokemonAttacks[item.name] ? sumUpPokemonAttacks[item.name] : 0,
      item.attack,
    ].reduce((totalAttack, attack) => totalAttack + attack, 0),
  };
}, {});

console.log("pokemonListResult", pokemonListResult);

// second way
pokemonListResult = pokemonList.reduce((sumUpPokemonAttacks, item) => {
  const totalAttack = [sumUpPokemonAttacks[item.name] || 0, item.attack].reduce(
    (totalAttack, attack) => totalAttack + attack,
    0
  );
  return {
    ...sumUpPokemonAttacks,
    [item.name]: totalAttack,
  };
}, {});

console.log("pokemonListResult", pokemonListResult);

// sum frist and attack ...

// {bulbasaur: {firstAttack: 4, attack: 21}, charmander: {firstAttack: 4, attack: 510}, squirtle: {firstAttack: 4, attack: 107}}

// first time X
pokemonListAttacks = pokemonList.reduce((sumUpPokemonAttacks, item) => {
  const totalAttack = [
    (sumUpPokemonAttacks[item.name] || {}).attack || 0,
    item.attack,
  ].reduce((totalAttack, attack) => totalAttack + attack, 0);
  const totalFirstAttack = [
    (sumUpPokemonAttacks[item.name] || {}).firstAttack || 0,
    item.firstAttack,
  ].reduce((totalFirtAttack, attack) => totalFirtAttack + attack, 0);

  return {
    ...sumUpPokemonAttacks,
    [item.name]: {
      firstAttack: totalFirstAttack,
      attack: totalAttack,
    },
  };
}, {});

console.log("pokemonListAttacks", pokemonListAttacks);

// doing better _/
pokemonListAttacks = pokemonList.reduce((sumUpPokemonAttacks, item) => {
  const totalAttack =
    ((sumUpPokemonAttacks[item.name] || {}).attack || 0) + item.attack;
  // not good
  const totalFirstAttack = [
    (sumUpPokemonAttacks[item.name] || {}).firstAttack || 0,
    item.firstAttack,
  ].reduce((totalFirtAttack, attack) => totalFirtAttack + attack, 0);

  return {
    ...sumUpPokemonAttacks,
    [item.name]: {
      firstAttack: totalFirstAttack,
      attack: totalAttack,
    },
  };
}, {});

console.log("pokemonListAttacks", pokemonListAttacks);

// 6. Given an array of strings count how many the value is repeated,

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
  "",
];

// OUTPUT: { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

let fruitBasketRes = fruitBasket
  .filter(Boolean)
  .reduce((countRepeatedFruit, fruit) => {
    let count = countRepeatedFruit[fruit] ? countRepeatedFruit[fruit] : 0;
    //   count = count + 1;
    return { ...countRepeatedFruit, [fruit]: ++count };
  }, {});

console.log("fruitBasketRes", fruitBasketRes);

// example
let i = 1;
console.log("i: ", i);

console.log("i++: ", i++);
console.log("i: ", i);
console.log("++i: ", ++i);

// COMING BACK to INF-99

fruitBasketRes = fruitBasket
  .filter(Boolean)
  .reduce((countRepeatedFruit, fruit) => {
    countRepeatedFruit[fruit] = countRepeatedFruit[fruit]
      ? countRepeatedFruit[fruit] + 1
      : 1;
    return countRepeatedFruit;
  }, {});

console.log("fruitBasketRes---?", fruitBasketRes);
