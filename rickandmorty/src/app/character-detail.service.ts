import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailService {
  characterId;
  constructor(private http: HttpClient) {
    this.characterId = 0;
  }

  setCharacterId(id: number) {
    this.characterId = id;
  }

  getCharacterId() {
    return this.characterId;
  }

  returnCharacter(id: number) {
    let query = 'https://rickandmortyapi.com/api/character/';

    query += id;

    return this.http.get(query);
  }
}
