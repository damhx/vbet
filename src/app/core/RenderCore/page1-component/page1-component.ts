import { Component } from '@angular/core';
import { ImagePage1Component } from "./components/image-page1-component/image-page1-component";
import { TextPage1Component } from "./components/text-page1-component/text-page1-component";

@Component({
  selector: 'app-page1-component',
  imports: [ImagePage1Component, TextPage1Component],
  templateUrl: './page1-component.html',
  styleUrl: './page1-component.css'
})
export class Page1Component {

}
