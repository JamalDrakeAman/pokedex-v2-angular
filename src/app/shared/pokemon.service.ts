import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PokemonListResponse {
  results: any[]; 
  next: string | null;  
  previous: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {



  pokemonData: any[] = [];
  pokeUrl:any = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';

  constructor(private http: HttpClient) { }

  fetchDetails(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      this.pokeUrl
    );
  }


  loadPokemonData() {
    this.fetchDetails().subscribe({
      next: (response) => {
        this.pokemonData = [...this.pokemonData,...response.results]; // Daten zuweisen
  
        console.log(this.pokeUrl);
        console.log(response);
        console.log('Geladene Pokemon:', this.pokemonData); // Korrekt ausloggen
        // console.log('Signal poke', this.pokeData);
        this.pokeUrl = response.next
        console.log(this.pokeUrl);
      },
      error: (err) => {
        console.error('Fehler beim Laden:', err);
      },
    });
  }





}