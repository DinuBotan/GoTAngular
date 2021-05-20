import { Component, OnInit } from '@angular/core';
import {CharacterService} from './character.service';
import {Character} from './character.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  subscription: Subscription;
  showDetails = false;
  public searchInput: string;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

  // Here we subscribe to the subject from characterService.
  // As soon as it gets changed the characters array gets populated here and displayed.
  ngOnInit(): void {
    this.subscription = this.characterService.charactersChanged
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
          console.log('Characters arrived in the list: ', this.characters);
        }
      );
    this.characters = this.characterService.getCharacters();
  }

  onShowCharacterDetails(i: number){
    this.router.navigate( [i + '/details'], {relativeTo: this.route});
  }

}
