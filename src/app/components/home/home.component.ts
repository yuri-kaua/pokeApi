import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showPokemon: boolean = false;
  visible: boolean = false;
  filterPoke!: string;

  suggestionsPoke: any;

  buscarPoke!: any;

  escolhidoPoke: any;

  allPokemons: any[] = [];

  selectedPokemon!: any;

  namePokemon: string = '';

  chosenPoke: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getAllPoke().subscribe({
      next: (res) => {
        for (let i = 0; i < res.count; i++) {
          this.allPoke(res.results[i].name, true);
          console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  allPoke(poke?: string, init?: boolean) {
    this.serviceService.getPoke(poke ? poke : this.filterPoke).subscribe({
      next: (res) => {
        this.allPokemons.push(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getAll() {
    this.allPokemons.map((pokemon) => {
      for (let i = 0; i < 1281; i++) {}
    });
  }

  selectPokemon(pokemon: any) {
    this.showPokemon = true;
    // this.visible = true;
    this.chosenPoke = false;
    this.namePokemon = pokemon.name;
    this.selectedPokemon = pokemon;
  }

  close() {
    this.visible = false;
    this.showPokemon = false;
    this.chosenPoke = false;

    // location.reload();
  }

  PokemonFilter() {
    this.serviceService.getPoke(this.namePokemon).subscribe({
      next: (res) => {
        this.chosenPoke = res;
        this.selectPokemon(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  closeCard() {
    this.showPokemon = false;
  }
}
