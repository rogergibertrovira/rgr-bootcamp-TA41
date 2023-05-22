import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterListService {
  randomCharacterList = [0, 0, 0, 0, 0, 0, 0, 0];
  characterCount = 826; // Update to get from the website json

  constructor(private http: HttpClient) {}

  createRandomCharacterList() {
    for (let i = 1; i <= 8; i++) {
      this.randomCharacterList[i - 1] =
        Math.floor(Math.random() * this.characterCount) + 1;
    }
  }

  returnCharacters() {
    this.createRandomCharacterList();
    let query = 'https://rickandmortyapi.com/api/character/';
    for (let i = 1; i < 8; i++) {
      query += this.randomCharacterList[i - 1] + ',';
    }
    query += this.randomCharacterList[7];

    return this.http.get(query);
  }
}
