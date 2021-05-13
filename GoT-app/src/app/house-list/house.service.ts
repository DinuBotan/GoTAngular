import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {House} from './house.model';

@Injectable()
export class HouseService {
  housesChanged = new Subject<House[]>();

  private houses: House[] = [];

  constructor() {
  }

  setHouses(houses: House[]) {
    this.houses = houses;
    this.housesChanged.next(this.houses.slice());
  }

  getHouses() {
    return this.houses.slice();
  }

  getHouse(index: number) {
    return this.houses[index];
  }
}
