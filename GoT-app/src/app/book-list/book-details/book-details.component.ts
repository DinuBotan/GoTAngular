import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book} from '../book.model';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;
  characters: string[];

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // The + casts it to a number
        this.id = +params['id'];
        this.book = this.bookService.getBook(this.id);
        this.characters = this.book.characters;
      }
    );
}

// getCharacter(string character) {
//     this.dataStorageService
// }

}
