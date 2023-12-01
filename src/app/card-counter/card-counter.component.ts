import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-counter',
  standalone: true,
  imports: [],
  templateUrl: './card-counter.component.html',
  styleUrl: './card-counter.component.css',
})
export class CardCounterComponent {
  @Input() counter: number = 0;
}
