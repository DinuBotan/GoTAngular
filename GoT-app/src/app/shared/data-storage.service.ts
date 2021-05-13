import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../book-list/book.service';
import {Book} from '../book-list/book.model';
import {Character} from '../character-list/character.model';
import {map} from 'rxjs/operators';
import {CharacterService} from '../character-list/character.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService, private characterService: CharacterService) {
  }
  private baseUrl = 'https://www.anapioficeandfire.com/api/';


  fetchBooks() {
    console.log('Fetching books!');
    this.http.get<Book[]>(this.baseUrl + 'books?' + 'page=1&pageSize=50').subscribe(books => {
     console.log('Fetched books: ', books);
     this.bookService.setBooks(books);
   });
  }


  // getAllBooks(): any {
  //   let response = this.http.get<Book[]>(this.baseUrl + 'books');
  //   console.log('Response: ', response);
  //   // for(let bk in response) {
  //   //   this.booksGot.push(new Book(bk.))
  //   // }
  //   return response;
  // }

  fetchCharacters() {
    console.log('Fetching characters!');
    this.http.get<Character[]>(this.baseUrl + 'characters?' + 'page=1&pageSize=50').subscribe(characters => {
      console.log('Fetched characters: ', characters);
      this.characterService.setCharacters(characters);
    });
  }

}
