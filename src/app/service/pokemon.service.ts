import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.apiUrl + 'pokemon/';
  private _pokemons: any[] = [];
  private _all: string = '';

  constructor(private http: HttpClient) {
  }

  get pokemons(): any[] {
    return this._pokemons;
  }

  set pokemons(pokemons: any[]) {
    this._pokemons = pokemons;
  }

  get all(): string {
    return this._all;
  }

  set all(all: string) {
    this._all = all;
  }

  getType(pokemon: any): string {
    console.log(pokemon.types)
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  get(name: string): Observable<any> {
    const url = `${this.url}${name}`;
    return this.http.get<any>(url);
  }

  getAll(): Observable<any> {
    const url = `${this.url}?limit=251`;
    return this.http.get<any>(url);
  }
}
