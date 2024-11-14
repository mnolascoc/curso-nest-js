import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeapiAdapter, PokeapiFetchAdapter } from "../api/pokeapi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.png`;
  }

  // inyectar dependencias: HttpAdapter
  constructor(public readonly id: number, public name: string, private readonly http: HttpAdapter) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name},${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { moves } = await this.http.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");
    console.log(moves);

    return moves;
  }
}

const pokeapiAdapter = new PokeapiAdapter();
const pokeapiFetchAdapter = new PokeapiFetchAdapter();

// Principio de sustitución de Liskov: Se puede reemplazar por cualquier httpAdapter
export const charmander = new Pokemon(1, "charmander", pokeapiAdapter);
export const charmander2 = new Pokemon(1, "charmander", pokeapiFetchAdapter);

charmander.name = "charmanders!";
// console.log(charmander);
// charmander.scream();
// charmander.speak();

charmander.getMoves();
