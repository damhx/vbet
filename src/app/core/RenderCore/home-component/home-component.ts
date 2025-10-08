import { Component } from '@angular/core';
import { ChipsComponent } from "./component/chips-component/chips-component";
import { CardComponent } from "./component/card-component/card-component";

@Component({
  selector: 'app-home-component',
  imports: [ChipsComponent, CardComponent,],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
