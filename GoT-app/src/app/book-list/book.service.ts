import {Book} from './book.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookService {
  // bookSelected = new EventEmitter<Book>();
  // booksChanged = new Subject<Book[]>();
  booksChanged = new EventEmitter<Book[]>();
  public booksGot: Book[] = [];

  public books: Book[] = [
    new Book('First book', 'some url', '12345', ['1st', '2nd']),
    new Book('Second book', 'some url', '12345', ['1st', '2nd']),
    new Book('Third book', 'some url', '12345', ['1st', '2nd'])
  ];

  private booksSet: Book[] = [];
  b: Book = new Book('Fourth book', 'some url', '12345', ['1st', '2nd']);

  constructor(private http: HttpClient) {
  }
  private baseUrl = 'https://www.anapioficeandfire.com/api/';

  // Slice will return a new array which is an exact copy of the one in this file. We won't access the array directly from outside.
  getBooks() {

    let response = this.http.get(this.baseUrl + 'books');
    console.log('Http response: ', response);

    for(let book of this.booksGot){
      console.log('In for loop');
      this.books.push(new Book(book.name, book.url, book.isbn, book.authors));
    }
    console.log('Returning books: ', this.books);
    return this.books;
  }

  getBook(index: number){
    console.log('Book returned: ', this.booksSet[index], ' index: ', index, ' books array: ', this.booksSet);
    return this.books[index];
  }

  setBooks(books: Book[]) {

  }

  getAllBooks(): any {
    let response = this.http.get<Book[]>(this.baseUrl + 'books');
    console.log('Response: ', response);

    return response;
  }

}
