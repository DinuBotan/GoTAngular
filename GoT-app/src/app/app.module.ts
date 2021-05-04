import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BookDetailsComponent } from './book-list/book-item/book-details/book-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterItemComponent } from './character-list/character-item/character-item.component';
import { CharacterDetailsComponent } from './character-list/character-item/character-details/character-details.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseItemComponent } from './house-list/house-item/house-item.component';
import { HouseDetailsComponent } from './house-list/house-item/house-details/house-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailsComponent,
    CharacterListComponent,
    CharacterItemComponent,
    CharacterDetailsComponent,
    HouseListComponent,
    HouseItemComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
