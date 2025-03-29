import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../shared/pokemon.service';
import { PokeGridComponent } from '../poke-grid/poke-grid.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    PokeGridComponent,
    CommonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  public pokeService = inject(PokemonService);

  // pokemonData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pokeService.loadPokemonData();
  }


  loadMore() {
    this.pokeService.loadPokemonData();
  }


  // loadPokemonData() {
  //   this.pokeService.fetchDetails().subscribe({
  //     next: (response) => {
  //       this.pokemonData = response.results; // Daten zuweisen
  //       console.log('Geladene Pokemon:', this.pokemonData); // Korrekt ausloggen
  //     },
  //     error: (err) => {
  //       console.error('Fehler beim Laden:', err);
  //     },
  //   });
  // }


}
