import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book} from '../book.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subject} from 'rxjs';
import {Character} from '../../character-list/character.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;
  characters: string[];
  characterRequested = new Subject<Character[]>();

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    // Here we are subscribed to the book-item.component.html routerlink which passes the id of the element that was clicked
    // so we can get its details
    this.route.params.subscribe(
      (params: Params) => {
        // The + casts it to a number
        this.id = +params['id'];
        this.book = this.bookService.getBook(this.id);
        this.characters = this.book.characters;
      }
    );

    // this.subscription = this.characterRequested
    //   .subscribe(
    //     this.getCharacter()
    //   );
    // this.books = this.bookService.getBooks();
}

// getCharacter(string character) {
//     this.characterRequested
// }


}
