import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gamer',
  standalone: true,
  imports: [],
  templateUrl: './gamer.component.html',
  styleUrl: './gamer.component.css',
})
export class GamerComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'God of war',
    },
    {
      id: 2,
      name: 'Gran turismo',
    },
    {
      id: 3,
      name: 'San andres',
    },
  ];

  fav(dato: string) {
    this.addFavoriteEvent.emit(dato);
  }
}
