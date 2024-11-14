import axios from "axios";

// Principio de sustitución de Liskov

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeapiFetchAdapter implements HttpAdapter {
  async get<T>(url: string) {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  }
}

export class PokeapiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
