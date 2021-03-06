import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {BookService} from '../book-list/book.service';

// Annotation tells angular this is a component. We pass the configuration of the component as a javascript object
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  constructor(private dataStorageService: DataStorageService, private bookService: BookService) {}
  // We fetch all the data we are intersed in as soon as the app is started
  ngOnInit() {
      this.dataStorageService.fetchCharacters();
      this.dataStorageService.fetchBooks();
      this.dataStorageService.fetchHouses();
  }



}

