import { Component } from '@angular/core';
import { GamerComponent } from '../gamer/gamer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'kevin js';
  islogged = false;
  favgame: string = '';

  getFavorite(dato: string) {
    this.favgame = dato;
  }

  alerta() {
    alert('!!!!!HOLAAAAAAAA');
  }
}
