import {Component, OnInit} from '@angular/core';
import {Book} from './book.model';
import {BookService} from './book.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {Character} from '../character-list/character.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[];
  subscription: Subscription;
  public searchInput: string;

  // I need to inject the book service created earlier in thsi component through its constructor
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.bookService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          console.log('Books arrived in book list: ', this.books);
        }
      );
    this.books = this.bookService.getBooks();
    }

}
