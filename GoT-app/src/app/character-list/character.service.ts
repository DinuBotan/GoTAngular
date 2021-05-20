import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Character} from './character.model';
import {Subject} from 'rxjs';

@Pipe({
  name: 'search'
})

// Injectable because we want to use the service later on in our character - related components.
@Injectable()
export class CharacterService implements PipeTransform {
  // A multicast observable that will let us know when the characters have been fetched and set.
  charactersChanged = new Subject<Character[]>();

  private characters: Character[] = [
    // new Character(['1', '1'], 'First character', 'culture 1', 'born 1', 'died 1'),
    // new Character(['2', '2'], 'Second character', 'culture 2', 'born 2', 'died 2'),
    // new Character(['3', '3'], 'Third character', 'culture 3', 'born 3', 'died 3')
  ];

  constructor() {
  }

  // Called from the dataStorageService when the characters are fetched from the api. Will populate the characters array
  // and send them in a message to all components subscribed to our subject, in this case to character-list.component.ts.
  setCharacters(characters: Character[]) {
    this.characters = characters;
    this.charactersChanged.next(this.characters.slice());
  }

  // Returns character array
  getCharacters() {
    return this.characters.slice();
  }

  //Returns specified character at given index
  getCharacter(index: number) {
    return this.characters[index];
  }

  // Pipe used to filter the houses based on user input.
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
