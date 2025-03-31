import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../shared/pokemon.service';
import { PokeGridComponent } from '../poke-grid/poke-grid.component';
import { SidebarStateService } from '../../shared/sidebar-state.service';


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


  constructor(public sidebarState: SidebarStateService) { }

  ngOnInit(): void {
    this.pokeService.loadPokemonData();
  }


  loadMore() {
    this.pokeService.loadPokemonData();
  }


}
