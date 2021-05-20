import { Component, OnInit } from '@angular/core';
import {Character} from '../../character.model';
import {CharacterService} from '../../character.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;
  id: number;

  constructor(private characterService: CharacterService,
              private route: ActivatedRoute,
              private router: Router) { }

  // Here we are subscribed to the character-item.component.html routerlink which passes the id of the element that was clicked
  // so we can get its details
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.character = this.characterService.getCharacter(this.id);
        }
      );
  }

}
