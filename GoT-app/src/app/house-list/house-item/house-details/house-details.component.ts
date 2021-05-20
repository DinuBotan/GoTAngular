import { Component, OnInit } from '@angular/core';
import {House} from '../../house.model';
import {HouseService} from '../../house.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house: House;
  id: number;

  constructor(private houseService: HouseService, private route: ActivatedRoute,
              private router: Router) { }
  // Here we are subscribed to the house-item.component.html routerlink which pases the id of the element that was clicked
  // so we can get its details
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.house = this.houseService.getHouse(this.id);
        }
      );
  }

}
