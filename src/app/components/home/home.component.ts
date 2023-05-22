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

  buscarPoke!: any;

  escolhidoPoke: any;

  allPokemons: any[] = [];

  selectedPokemon!: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    console.log('ola');

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
    this.visible = true;
    this.selectedPokemon = pokemon;
  }

  close() {
    this.visible = false;
    this.showPokemon = false;
    // location.reload();
  }
}
