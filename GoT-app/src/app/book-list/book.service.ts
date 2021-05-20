import {Book} from './book.model';
import {EventEmitter, Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs';
import {Character} from '../character-list/character.model';

@Pipe({
  name: 'search'
})

// Injectable because we want to use the service later on in our book - related components.
@Injectable()
export class BookService implements PipeTransform{
  // A multicast observable that will let us know when the books have been fetched and set.
  booksChanged = new Subject<Book[]>();

  public books: Book[] = [
    // new Book('First book', 'some url', '12345', ['1st', '2nd']),
    // new Book('Second book', 'some url', '12345', ['1st', '2nd']),
    // new Book('Third book', 'some url', '12345', ['1st', '2nd'])
  ];

  constructor() {
  }

  // Called from the dataStorageService when the books are fetched from the api. Will populate the books array
  // and send them in a message to all components subscribed to our subject, in this case to book-list.component.ts.
  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  // Returns array of books
  getBooks() {
    return this.books.slice();
  }

  // Returns book at given index
  getBook(index: number) {
    return this.books[index];
  }

  // Pipe used to filter the houses based on user input.
  transform(books: any[], searchInput: string, fieldName: string): any[] {
    if (!books){
      return [];
    }

    if (!searchInput) {
      return books;
    }

    searchInput = searchInput.toLowerCase();
    return books.filter(
      item => {
        if (item && item[fieldName]) {
          return item[fieldName].toLowerCase().includes(searchInput);
        }
        return false;
      }
    );
  }


}
