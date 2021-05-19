import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../book-list/book.service';
import {Book} from '../book-list/book.model';
import {Character} from '../character-list/character.model';
import {CharacterService} from '../character-list/character.service';
import {House} from '../house-list/house.model';
import {HouseService} from '../house-list/house.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService, private characterService: CharacterService, private houseService: HouseService) {
  }
  private baseUrl = 'https://www.anapioficeandfire.com/api/';


  fetchBooks() {
    console.log('Fetching books!');
    this.http.get<Book[]>(this.baseUrl + 'books?' + 'page=1&pageSize=50').subscribe(books => {
     console.log('Fetched books: ', books);
     this.bookService.setBooks(books);
   });
  }

  fetchCharacters() {
    console.log('Fetching characters!');
    this.http.get<Character[]>(this.baseUrl + 'characters?' + 'page=1&pageSize=50').subscribe(characters => {
      console.log('Fetched characters: ', characters);
      this.characterService.setCharacters(characters);
    });
  }

  fetchHouses() {
    console.log('Fetching houses!');
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
