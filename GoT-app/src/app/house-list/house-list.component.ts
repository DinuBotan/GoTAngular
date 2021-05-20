import { Component, OnInit } from '@angular/core';
import {Character} from '../character-list/character.model';
import {Subscription} from 'rxjs';
import {House} from './house.model';
import {HouseService} from './house.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[];
  subscription: Subscription;
  public searchInput: string;

  constructor(private houseService: HouseService, private router: Router, private route: ActivatedRoute) { }

  // Here we subscribe to the subject from houseService. As soon as it gets changed the house array gets populated here and displayed.
  ngOnInit(): void {
    this.subscription = this.houseService.housesChanged
      .subscribe(
        (houses: House[]) => {
          this.houses = houses;
          console.log('Houses arrived in the list: ', this.houses);
        }
      );
    this.houses = this.houseService.getHouses();
  }

}
