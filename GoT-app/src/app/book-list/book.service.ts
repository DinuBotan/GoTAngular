import {Book} from './book.model';
import {EventEmitter, Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs';

@Pipe({
  name: 'search'
})

@Injectable()
export class BookService implements PipeTransform{
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
