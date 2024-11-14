export const pokemonsIds = [1, 20, 30, 34, 66];

pokemonsIds.push(10);

interface Pokemon {
  id: number;
  name: string;
  age?: number; //opcional
}

export const pokemon: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const pokemons: Pokemon[] = [{ id: 1, name: "Bulbasaur" }];
console.log(pokemons);
