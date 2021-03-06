import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {HouseListComponent} from './house-list/house-list.component';
import {BookDetailsComponent} from './book-list/book-details/book-details.component';
import {CharacterDetailsComponent} from './character-list/character-item/character-details/character-details.component';
import {HouseDetailsComponent} from './house-list/house-item/house-details/house-details.component';

// The routes in our app. Here we specify which component should be displayed when a given route is chosen.
const appRoutes: Routes = [
  {path: '', redirectTo: '/book-list', pathMatch: 'full'},
  { path: 'book-list', component: BookListComponent},
  {path: 'book-list/:id/details', component: BookDetailsComponent},
  { path: 'character-list', component: CharacterListComponent},
  { path: 'character-list/:id/details', component: CharacterDetailsComponent},
  { path: 'house-list', component: HouseListComponent },
  {path: 'house-list/:id/details', component: HouseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
