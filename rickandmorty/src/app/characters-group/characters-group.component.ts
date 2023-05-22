import { Component } from '@angular/core';

import { CharacterListService } from '../character-list.service';

@Component({
  selector: 'app-characters-group',
  templateUrl: './characters-group.component.html',
  styleUrls: ['./characters-group.component.css'],
})
export class CharactersGroupComponent {
  characters: any = null;

  constructor(private characterListService: CharacterListService) {}

  ngOnInit() {
    this.characterListService
      .returnCharacters()
      .subscribe((result) => (this.characters = result));
  }
}
