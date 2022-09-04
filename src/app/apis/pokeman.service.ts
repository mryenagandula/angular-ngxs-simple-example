import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemanService {
  public URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

  constructor(private http:HttpClient) { }

  public getAllPokemans():Observable<any>{
    return <any>this.http.get(`${this.URL}`);
  }
}
