import { Component } from '@angular/core';

// This is our root component where we later nest other components.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoT-app';
  loadedFeature = 'book';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
