import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showPokemon: boolean = true;
  filterPoke!: string;

  buscarPoke!: any;

  allPokemons: any[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getAllPoke().subscribe({
      next: (res) => {
        console.log(res);

        for (let i = 0; i < res.count; i++) {
          this.allPoke(res.results[i].name, true);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  allPoke(poke?: string, init?: boolean) {
    this.showPokemon = true;
    this.serviceService.getPoke(poke ? poke : this.filterPoke).subscribe({
      next: (res) => {
        this.allPokemons.push(res);
        console.log(this.allPokemons);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getAll() {
    this.allPokemons.map((pokemon) => {
      for (let i = 0; i < 1281; i++) {
        // this.allPoke(pokemon[i]);
        console.log(pokemon[i]);
      }
    });

    // for (let i = 0; i < 1281; i++) {}
  }
}
