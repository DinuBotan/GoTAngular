import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../book-list/book.service';
import {Book} from '../book-list/book.model';
import {Character} from '../character-list/character.model';
import {CharacterService} from '../character-list/character.service';
import {House} from '../house-list/house.model';
import {HouseService} from '../house-list/house.service';

// Injectable because we want to be able to inject(use) this service in our components.
@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService, private characterService: CharacterService, private houseService: HouseService) {
  }
  private baseUrl = 'https://www.anapioficeandfire.com/api/';

// Will fetch the first 50 books from the 1st page based on the api requirements.
  fetchBooks() {
    console.log('Fetching books!');
    // Fetch the books asynchronously and send them to the bookService afterwards.
    this.http.get<Book[]>(this.baseUrl + 'books?' + 'page=1&pageSize=50').subscribe(books => {
     console.log('Fetched books: ', books);
     this.bookService.setBooks(books);
   });
  }
// Will fetch the first 50 characters from the 1st page based on the api requirements.
  fetchCharacters() {
    console.log('Fetching characters!');
    // Fetch the books characters and send them to the characterService afterwards.
    this.http.get<Character[]>(this.baseUrl + 'characters?' + 'page=1&pageSize=50').subscribe(characters => {
      console.log('Fetched characters: ', characters);
      this.characterService.setCharacters(characters);
    });
  }
// Will fetch the first 50 houses from the 1st page based on the api requirements.
  fetchHouses() {
    console.log('Fetching houses!');
    // Fetch the houses asynchronously and send them to the houseService afterwards.
    this.http.get<House[]>(this.baseUrl + 'houses?' + 'page=1&pageSize=50').subscribe(houses => {
      console.log('Fetched houses: ', houses);
      this.houseService.setHouses(houses);
    });
  }

  // fetchCharacter(int: id) {
  //   console.log('Fetching character ', id);
  //   this.http.get<Character[]>(this.baseUrl + 'characters/' + id).subscribe(character => {
  //     console.log('Fetched character: ', character);
  //     this.characterService.setCharacters(character);
  //   });
  // }
}
