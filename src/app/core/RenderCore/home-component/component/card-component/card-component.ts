import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  constructor(private router: Router) {}

  irAPage1() {
    this.router.navigate(['/page1'])
  }
}
