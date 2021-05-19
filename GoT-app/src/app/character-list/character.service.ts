import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Character} from './character.model';
import {Subject} from 'rxjs';

@Pipe({
  name: 'search'
})

@Injectable()
export class CharacterService implements PipeTransform {
  charactersChanged = new Subject<Character[]>();

  private characters: Character[] = [
    // new Character(['1', '1'], 'First character', 'culture 1', 'born 1', 'died 1'),
    // new Character(['2', '2'], 'Second character', 'culture 2', 'born 2', 'died 2'),
    // new Character(['3', '3'], 'Third character', 'culture 3', 'born 3', 'died 3')
  ];

  constructor() {
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
    this.charactersChanged.next(this.characters.slice());
  }

  getCharacters() {
    return this.characters.slice();
  }

  getCharacter(index: number) {
    return this.characters[index];
  }

  transform(characters: any[], searchInput: string, fieldName: string): any[] {
    if (!characters){
      return [];
    }

    if (!searchInput) {
      return characters;
    }

    searchInput = searchInput.toLowerCase();
    return characters.filter(
      item => {
        if (item && item[fieldName]) {
          return item[fieldName].toLowerCase().includes(searchInput);
        }
        return false;
      }
    );
  }

}
