import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-page1-component',
  imports: [],
  templateUrl: './text-page1-component.html',
  styleUrl: './text-page1-component.css'
})
export class TextPage1Component {
  constructor(private router: Router) {}

  irAHome() {
    this.router.navigateByUrl('');
  }
}
