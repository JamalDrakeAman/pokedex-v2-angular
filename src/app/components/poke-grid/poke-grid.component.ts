import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-poke-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-grid.component.html',
  styleUrl: './poke-grid.component.scss'
})
export class PokeGridComponent {

  @Input() i = 0

  @Input() pokeData = {
    name: '',
    url: ''
  }
  

}
