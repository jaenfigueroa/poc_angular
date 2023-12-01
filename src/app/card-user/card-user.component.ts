import { Component } from '@angular/core';

@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css',
})
export class CardUserComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '555-555-5555',
    website: 'johndoe.com',
    avatar: 'https://github.com/jaenfigueroa.png',
  };
}
