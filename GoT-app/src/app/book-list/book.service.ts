import {Book} from './book.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class BookService {
  bookSelected = new EventEmitter<Book>();

  private books: Book[] = [
    new Book('First book', 'some url', '12345', ['1st', '2nd']),
    new Book('Second book', 'some url', '12345', ['1st', '2nd']),
    new Book('Third book', 'some url', '12345', ['1st', '2nd'])
  ];

  // Slice will return a new array which is an exact copy of the one in this file. We won't access the array directly from outside.
  getBooks() {
    return this.books.slice();
  }

  getBook(index: number){
    return this.books[index];
  }
}
