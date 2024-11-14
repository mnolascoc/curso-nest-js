import "./style.css";
import { setupCounter } from "./counter.ts";
// import { name, age, married } from "./bases/01-types.ts";
// import { pokemon } from "./bases/02-objetos-interfaces.ts";
// import { charmander } from "./bases/03-clases.ts";
// import { charmander } from "./bases/04-injection.ts";
// import { charmander } from "./bases/05-decorators.ts";
import { charmander } from "./bases/06-decorators2.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript ${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
