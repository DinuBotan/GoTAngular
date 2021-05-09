import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {HouseListComponent} from './house-list/house-list.component';
import {BookDetailsComponent} from './book-list/book-details/book-details.component';
import {CharacterDetailsComponent} from './character-list/character-item/character-details/character-details.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/book-list', pathMatch: 'full'},
  { path: 'book-list', component: BookListComponent, children: [
      { path: ':id', component: BookDetailsComponent }
    ] },
  { path: 'character-list', component: CharacterListComponent
    //, children:
      //[
      // { path: ':id', component: CharacterDetailsComponent},
      // { path: ':id/details', component: CharacterDetailsComponent}
    // ]
  },
  { path: 'character-list/:id/details', component: CharacterDetailsComponent}
  // { path: 'house-list', component: HouseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
