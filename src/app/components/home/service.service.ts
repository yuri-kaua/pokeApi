import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  PUBLIC_KEY = 'https://pokeapi.co/api/v2/pokemon/';
  HASH = '';
  URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=1281';

  constructor(private Http: HttpClient) {}

  getPoke(pokemon: string): Observable<any> {
    return this.Http.get<any>(this.PUBLIC_KEY + pokemon);
  }
  getAllPoke(): Observable<any> {
    return this.Http.get<any>(this.URL_API);
  }
}
