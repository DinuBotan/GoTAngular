import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {Character} from '../../character-list/character.model';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  // Input here comes from book-list.component.html
  @Input() book: Book;
  @Input() index: number;
  characters: string[];

  constructor() { }

  ngOnInit(): void {
  }

  setCharacters(characters: string[]) {
    this.characters = characters;
  }

}
