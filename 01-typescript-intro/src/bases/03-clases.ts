import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.png`;
  }

  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name},${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");
    return data.moves;
  }
}

export const charmander = new Pokemon(1, "charmander");

charmander.name = "charmanders!";
// console.log(charmander);
// charmander.scream();
// charmander.speak();

charmander.getMoves();
