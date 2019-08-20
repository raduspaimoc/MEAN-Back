import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`
  hr {
    color: black;
  }`]*/
})
export class AppComponent {

  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature; 
  }
  // Assignments 2 and 3

  //username = 'Marsupialin';
  /*showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }*/
}
