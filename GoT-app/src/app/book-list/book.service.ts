import {Book} from './book.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';
import {HttpClient} from '@angular/common/http';
import {Character} from '../character-list/character.model';

@Injectable()
export class BookService {
  booksChanged = new Subject<Book[]>();

  public books: Book[] = [
    // new Book('First book', 'some url', '12345', ['1st', '2nd']),
    // new Book('Second book', 'some url', '12345', ['1st', '2nd']),
    // new Book('Third book', 'some url', '12345', ['1st', '2nd'])
  ];

  constructor() {
  }

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }


}
