import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs';
import {House} from './house.model';

@Pipe({
  name: 'search'
})

// Injectable because we want to use the service later on in our house - related components.
@Injectable()
export class HouseService implements PipeTransform{
  // A multicast observable that will let us know when the houses have been fetched and set.
  housesChanged = new Subject<House[]>();

  private houses: House[] = [];

  constructor() {
  }

  // Called from the dataStorageService when the houses are fetched from the api. Will populate the houses array
  // and send them in a message to all components subscribed to our subject, in this case to house-list.component.ts.
  setHouses(houses: House[]) {
    this.houses = houses;
    this.housesChanged.next(this.houses.slice());
  }

  // Returns the houses array.
  getHouses() {
    return this.houses.slice();
  }

  // Returns the house at the specified index.
  getHouse(index: number) {
    return this.houses[index];
  }

  // Pipe used to filter the houses based on user input.
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
