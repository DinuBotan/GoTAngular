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
