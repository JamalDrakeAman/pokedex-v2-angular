import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-poke-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-grid.component.html',
  styleUrl: './poke-grid.component.scss'
})
export class PokeGridComponent implements OnInit {

  @Input() i = 0

  @Input() pokeData = {
    name: '',
    url: ''
  }

  isLoading = true;
  imageLoaded = true;

  pokemonData: any = {}

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    console.log('my url', this.pokeData.url);
    this.loadPokemon()
  }


  fetchDetails(): Observable<any> {
    return this.http.get<any>(this.pokeData.url);
  }


  loadPokemon() {
    this.fetchDetails().subscribe({
      next: (response) => {
        this.pokemonData = response;

        console.log('The Response', response);
        console.log('Gelader Pokemon:', this.pokemonData);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden:', err);
      },
    });
  }





}
