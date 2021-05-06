import {Component, OnInit} from '@angular/core';
import {Book} from './book.model';
import {BookService} from './book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[];

  // I need to inject the book service created earlier in thsi component through its constructor
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookService.bookSelected.subscribe(
      (book: Book) => {
        this.selectedBook = book;
        console.log('Selected book: ', this.selectedBook);
      }
    );
  }


}
