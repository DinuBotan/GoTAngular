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

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.characterService.charactersChanged
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
        }
      );
    this.characters = this.characterService.getCharacters();
  }

  SetShowDetails() {
    this.showDetails = true;
  }

  onShowCharacterDetails(i: number){
    this.router.navigate( [i + '/details'], {relativeTo: this.route});
  }

}
