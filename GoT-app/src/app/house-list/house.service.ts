import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs';
import {House} from './house.model';

@Pipe({
  name: 'search'
})


@Injectable()
export class HouseService implements PipeTransform{
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

  transform(houses: any[], searchInput: string, fieldName: string): any[] {
    if (!houses){
      return [];
    }

    if (!searchInput) {
      return houses;
    }

    searchInput = searchInput.toLowerCase();
    return houses.filter(
      item => {
        if (item && item[fieldName]) {
          return item[fieldName].toLowerCase().includes(searchInput);
        }
        return false;
      }
    );
  }
}
