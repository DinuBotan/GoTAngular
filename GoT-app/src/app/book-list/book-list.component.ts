import {Component, OnInit} from '@angular/core';
import {Book} from './book.model';
import {BookService} from './book.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[];
  subscription: Subscription;

  // I need to inject the book service created earlier in thsi component through its constructor
  constructor(private bookService: BookService) { }

  ngOnInit() {


    this.bookService.getAllBooks().subscribe(
      books => this.books = books
    );

    console.log('Books in book-list set 2', this.books);


    }

}
